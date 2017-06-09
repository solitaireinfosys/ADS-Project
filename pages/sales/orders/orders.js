'use strict';

/* Controllers */

angular.module('app')
    .controller('OrdersCtrl', ['$scope', '$location', '$window', '$filter', 'OrderService', '$state',
        function ($scope, $location, $window, $filter, OrderService, $state) {
            $scope.showModal = showModal;
            $scope.userInput = [];
            function showModal() {
                $('#createOrder').modal('show');
            }
            $scope.Save = function () {
                angular.element('#createOrder .close').click();
                setTimeout(function () {
                    $location.path("/app/createorders");
                    $scope.$apply();
                }, 10);
            }

            $scope.getOrders = function () {

                OrderService.getAllOrders()
                    .success(function (result) {
                        $scope.Orders = result;
                    });
            };

            $scope.getOrders();

            $scope.clickThis = function (val) {
                $state.go("app.createorders", { id: val });
            }
        }
       

        
    ]);
