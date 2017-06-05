'use strict';

/* Controllers */

angular.module('app')
    .controller('LoginCtrl', ['$rootScope', '$scope', '$state', 'AuthService',
        function($rootScope, $scope, $state, AuthService) {
            // $rootScope.$on('$stateChangeStart', function() {
            //     event.preventDefault();
            //     $state.transitionTo('auth.login', {arg:'arg'});
            // });
            $scope.logUser = function (user) {
                AuthService.login(user);
            }
        }]);