'use strict';

/* Controllers */

angular.module('app')
    .controller('CustomerSalesCtrl', ['$scope', 'CustomerService', '$http',
        function($scope, CustomerService, $http) {
            $scope.search = "";
            var prod = [];
            var page = 1;


            function getProd(page) {
                CustomerService.getAllCustomers()
                    .success(function (result) {
                        return result;
                    });
            }

            var x = 1;
            var loopArray = function () {
                customAlert(x, function (result) {
                    if (result.length > 0) {
                        x++;
                        loopArray();
                    }
                    else {
                        console.log(prod.length);
                        $scope.customer = prod;
                    }
                });
            }


            loopArray();

            function customAlert(x, callback) {
                CustomerService.getAllCustomers(x)
                    .success(function (result) {
                        $.merge(prod, result);
                        callback(result);
                    });
            }

            $scope.getCustomers = function() {

                CustomerService.getAllCustomers()
                    .success(function(result) {
                        $scope.customer = result;
                    });
            };
            $scope.getCustomers();
        }
    ]);
