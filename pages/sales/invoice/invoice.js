'use strict';

/* Controllers */

angular.module('app')
    .controller('InvoiceCtrl', ['$scope', '$location', '$window', '$filter', 'OrderService', '$stateParams',
        function ($scope, $location, $window, $filter, OrderService, $stateParams) {
            //Private variables
            var products = [];
            var vm = this;

            //Scope variables
            $scope.totalAmount = 0;

            //Get total amount of all the products
            $scope.getTotalAmount = function () {
                for (var i = 0; i <= vm.products.length; i++) {
                    var product = vm.products[i];
                    if (product) {
                        $scope.totalAmount += product.total;
                    }
                }
                return $scope.totalAmount;
            }

            $scope.getOrderById = function () {
                OrderService.getOrderById($stateParams.id)
                    .success(function (result) {
                        $scope.order = result;
                        $scope.products = $scope.order.products;
                        vm.products = $scope.order.products;

                        //Once data is received get Total Amount of all the products
                        $scope.getTotalAmount();
                    });
            };
            $scope.getOrderById();
        }
    ]);
