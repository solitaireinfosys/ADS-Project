'use strict';

/* Controllers */

angular.module('app')
    .controller('ProductsCtrl', ['$scope', 'ProductService', '$sce',
        function ($scope, ProductService, $sce) {

            $scope.getProducts = function () {

                ProductService.getAllProducts()
                    .success(function (result) {
                        $scope.products = result;
                    });
            };
            $scope.getProducts();

            $scope.getSingleProduct=function(){
                ProductService.getProductbyId(id)
                .success(function(result){
                    $scope.product=result;
                });
            };
             $scope.getSingleProduct(id);

            // $scope.group1 = [{
            //     title: "PRODUCT",
            //     icon: "glyphicon glyphicon-education",
            //     items: [{ "item-title": "PRODUCT 1" }, { "item-title": "PRODUCT 2" }]
            // }, {
            //     title: "TYPE",
            //     icon: "glyphicon glyphicon-list-alt",
            //     items: [{ "item-title": "TYPE 3" }, { "item-title": "TYPE 4" }]
            // },];
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

