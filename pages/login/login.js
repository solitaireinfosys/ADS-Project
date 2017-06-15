'use strict';

/* Controllers */

angular.module('app')
    .controller('LoginCtrl', ['$rootScope', '$scope', '$state', 'AuthService', 'ProductService',
        function ($rootScope, $scope, $state, AuthService, ProductService) {
            
            var page = 1;
            var prod = [];
            var getproducts = [];
            var getdata = [];

            
            function getProd(page) {
                ProductService.getAllProducts(page)
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
                        getdata = prod;
                        dataShare.sendData(getdata);
                    }
                });
            }


            loopArray();

            function customAlert(x, callback) {
                ProductService.getAllProducts(x)
                    .success(function (result) {
                        $.merge(prod, result);
                        callback(result);
                    });

            }

            $scope.getProducts = function () {
                ProductService.getAllProducts(page)
                    .success(function (result) {
                        getdata = result;
                    });
            };

            $scope.getProducts();
            $scope.logUser = function (user) {
                AuthService.login(user);
            }

            
        }]);

