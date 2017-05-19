'use strict';

/* Controllers */

angular.module('app')
    .controller('CustomerSalesCtrl', ['$scope', 'CustomerService', '$http',
        function($scope, CustomerService, $http) {

            $scope.getCustomers = function() {

                CustomerService.getAllCustomers()
                    .success(function(result) {
                        $scope.customer = result;
                    });
            };
            $scope.getCustomers();
        }
    ]);
