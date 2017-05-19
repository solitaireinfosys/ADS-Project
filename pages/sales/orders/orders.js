'use strict';

/* Controllers */

angular.module('app')
    .controller('OrdersCtrl', ['$scope', '$location', '$window', '$filter','OrderService',
        function($scope, $location, $window, $filter,OrderService) {
            $scope.showModal = showModal;

            function showModal() {
                $('#createOrder').modal('show');
            }
            $scope.Save = function() {
                angular.element('#createOrder .close').click();
                setTimeout(function() {
                    $location.path("/app/createorders");
                    $scope.$apply();
                }, 10);
            }

            $scope.getOrders = function() {

                OrderService.getAllOrders()
                    .success(function(result) {
                        $scope.Orders = result;
                    });
            };
            $scope.getOrders();

        }
    ]);
