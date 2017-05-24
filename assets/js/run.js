angular
    .module('app')
    .run(function(authManager, $state, $rootScope, SETTINGS, store, AuthService, jwtHelper) {
        // set global function to logout
        $rootScope.globalLogout = AuthService.logout;

        $rootScope.authService = AuthService;

        // check every 5 seconds if session expired
        setInterval(function () {
            if (store.get(SETTINGS.JWT.name) && jwtHelper.isTokenExpired(AuthService.getToken())) {
                $state.go('auth.lock_screen');
            }
        }, 5000);

        // check logged in state
        $rootScope.$on('$stateChangeStart', function (e, to)
        {
            if (!to.data) {
                to.data = {
                    requiresLogin: true
                };
            }
            // CHECK IF THE CURRENT PAGE REQUIRES THE USER TO BE LOGGED IN
            // IF TRUE CHECK IF THE USER IS LOGGED IN
            if (to.data && to.data.requiresLogin) {
                if ( !AuthService.isLoggedIn() ) {
                    e.preventDefault();
                    $state.go('auth.login');
                }
            }
            // Begin session data loading
            if ( AuthService.isLoggedIn() && !AuthService.getSessionData() ) {
                AuthService.destroySessionData();
                AuthService.loadSessionData();
            }
            // prevent logged in users from going to
            // login, register, forgot password core
            var pages = ['auth.login','auth.register','auth.forgot-password','auth.lock_screen'];
            if ( pages.indexOf(to.name) !== -1 )
            {
                if ( AuthService.isLoggedIn() ) {
                    e.preventDefault();
                    $state.go('app.dashboard');
                }
            }
        });
    });