(function ()
{
    'use strict';

    angular.module('app')
        .factory('AuthService', AuthService);

    /** @ngInject */
    function AuthService($http, $state, store, SETTINGS, $q, jwtHelper) {
        var session;

        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            refreshSessionData: refreshSessionData,
            loadSessionData: loadSessionData,
            getTokenBody: getTokenBody,
            getToken: getToken,
            getSessionData: getSessionData,
            setSessionData: setSessionData,
            destroySessionData: destroySessionData,
            getUsername: getUsername,
            keepAlive: keepAlive
        };

        /** @ngInject */
        function login(user){
            $http({
                url: SETTINGS.AUTH_SERVICE + '/login',
                skipAuthorization: true,
                method: 'POST',
                data: {
                    payload: {
                        "username": user.username,
                        "password": user.password
                    }
                }
            })
            .success(function(response)
            {
                store.set(SETTINGS.JWT.name, response.data.jwt);
                $state.go('app.dashboard');
            })
            .error(function(err){
                console.log(err);
            });
        }

        /** @ngInject */
        function logout() {
            if (store.get(SETTINGS.JWT.name)) {
                store.remove(SETTINGS.JWT.name);
            }
            destroySessionData();
            $state.go('auth.login');
        }

        /** @ngInject */
        function isLoggedIn(){
            return store.get(SETTINGS.JWT.name) && !jwtHelper.isTokenExpired(store.get(SETTINGS.JWT.name));
        }

        /** @ngInject */
        function refreshSessionData() {
            location.reload();
        }

        /** @ngInject */
        function loadSessionData() {
            if (session){
                return session;
            }
            var ses = fetchSessionData();
            setSessionData(ses);
            return ses;
        }

        /** @ngInject */
        function getSessionData(){
            return session || null;
        }

        /** @ngInject */
        function destroySessionData() {
            setSessionData(null);
        }

        /** @ngInject */
        function setSessionData(data){
            session = data;
        }

        /** @ngInject */
        function fetchSessionData(){
            if ( isLoggedIn() ) {
                return $q(function(resolve, reject) {
                    $http({
                        url: SETTINGS.USER_PROFILE + "/" + getTokenBody()['sessionId'],
                        method: 'GET'
                    })
                    .success(function(response)
                    {
                        if (response) {
                            resolve(response);
                        } else {
                            reject();
                        }
                    })
                    .error(function(err){
                        reject(err);
                    });
                });
            }
            return null;
        }

        function keepAlive() {
            return $http({
                method: 'POST',
                url: SETTINGS.AUTH_SERVICE + '/heartbeat',
                data: {
                    sessionId: getTokenBody()['sessionId'],
                    jwt: getTokenBody()['jwt']
                }
            });
        }

        function getUsername() {
            return getTokenBody()['username']
        }

        function getTokenBody() {
            var token = store.get( SETTINGS.JWT.name );
            if ( token  ){
                return jwtHelper.decodeToken(token);
            }
            return false;
        }

        function getToken() {
            return store.get( SETTINGS.JWT.name );
        }
    }
})();