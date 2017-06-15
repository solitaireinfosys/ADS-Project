'use strict';

/* Controllers */

angular.module('app')
    .controller('ProductsCtrl', ['$scope', 'ProductService', 'AuthService', '$sce',
        function ($scope, ProductService, AuthService, $sce) {
            var page = 1;
            var prod = [];
            $scope.search = "";

            //function getProd(page) {
            //    ProductService.getAllProducts(page)
            //        .success(function (result) {
            //            return result;
            //        });
            //}

            //var x = 1;
            //var loopArray = function () {
            //    customAlert(x, function (result) {
            //        if (result.length > 0) {
            //            x++;
            //            loopArray();
            //        }
            //        else {
            //            console.log(prod.length);
            //            $scope.products = prod;
            //        }
            //    });
            //}

            
            //loopArray();

            //function customAlert(x, callback) {
            //    ProductService.getAllProducts(x)
            //        .success(function (result) {
            //            $.merge(prod, result);
            //            callback(result);
            //        });

            //}
            

            $scope.getProducts = function () {
                ProductService.getAllProducts(page)
                    .success(function (result) {
                        $scope.products = result;
                    });
                
                

            };

            $scope.getProducts();

            $scope.getSingleProduct = function () {
                ProductService.getProductbyId(id)
                    .success(function (result) {
                        $scope.product = result;
                    });
            };
            
            $scope.group2 = [{
                title: "BRAND",
                icon: "glyphicon glyphicon-list-alt",
                items: [{ "item-title": "BRAND 1" }, { "item-title": "BRAND 2" }]
            }, {
                title: "APPLICATION",
                icon: "glyphicon glyphicon-list-alt",
                items: [{ "item-title": "APPLICATION 3" }, { "item-title": "APPLICATION 4" }]
            },];

            $scope.close = function () {
                $scope.isOpen = false;
                $scope.isOpens = false;
            }
            $scope.categoryPopover = {
                templateUrl: 'CategoryTemplate.html',
            };
            $scope.typePopover = {
                templateUrl: 'TypeTemplate.html',
            };
            $scope.categories = [
                { value: 12, text: "Category 1" },
                { value: 433, text: "Category 2" },
                { value: 54, text: "Category 3" },
                { value: 126, text: "Category 4" },
                { value: 93, text: "Category 5" },
                { value: 76, text: "Category 6" }
            ];

            $scope.types = [
                { value: 432, text: "Type 1" },
                { value: 83, text: "Type 2" },
                { value: 676, text: "Type 3" },
                { value: 23, text: "Type 4" },
                { value: 978, text: "Type 5" },
                { value: 9, text: "Type 6" }
            ];



        }
    ]);

