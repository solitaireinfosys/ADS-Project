'use strict';

/* Controllers */

angular.module('app')
    .controller('editOrdersCtrl', ['$rootScope', '$scope', '$location', '$window', '$filter','$stateParams','editOrderService',
        function ($rootScope, $scope, $location, $window, $filter, $stateParams,editOrderService) {
            $scope.id = $stateParams.id;
            var getid = $scope.id;
            $scope.myVar = false;
            $scope.custom = [];
            $scope.Var = true;
            $scope.search = "";
            getOrders(getid);
            getProducts();
            getassemblies();
            $scope.visible = function (item) {
                console.log(item)
                return !($scope.query && $scope.query.length > 0
                    && item.name[$index]($scope.query) == -1);

            };
            $scope.visible = function (item) {
                return !($scope.query && $scope.query.length > 0
                    && item.name[$index]($scope.query) == -1);

            };
            
            $scope.remove = function ($index) {
                    $scope.custom.splice($index, 1);
            }
            $scope.toggle = function (scope) {
                scope.toggle();
            };
            $scope.validate = function () {
                this.editMode = false;
            };
            $scope.moveLastToTheBeginning = function () {
                var a = $scope.data.pop();
                $scope.data.splice(0, 0, a);
            };
            $scope.editrow = function (idSelected) {
                $scope.idSelected = idSelected.name;

            }
            $scope.newSubItem = function (val) {
                $scope.custom.push(val.node);
            };
            function getOrders(getid) {
                if (getid != "")
                {
                    $scope.Var = false
                    $scope.myVar = true;
                    editOrderService.getOrder(getid)
                        .success(function (result) {
                            $scope.OrderName = result;
                            $scope.custom = result.products;
                            console.log($scope.OrderName);
                        });
                }

                };

                $scope.saveOrder = function (val) {
                    var getid = $scope.OrderName._id;
                    editOrderService.updateorder($scope.custom, getid)
                            .success(function (data) {

                            })
                }
                function getassemblies()
                {
                    editOrderService.getAssemblies()
                        .success(function (result) {
                            $scope.Data = result;
                        });
                }

            function getProducts() {                
                editOrderService.getAllProducts()
                    .success(function (result) {
                        //console.log(result)
                        $scope.data = result;                        
                    });                
            };
        }
    ]);
