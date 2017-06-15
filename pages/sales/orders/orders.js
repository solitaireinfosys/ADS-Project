'use strict';

/* Controllers */

angular.module('app')
    .controller('OrdersCtrl', ['$scope', '$location', '$window', '$filter', 'OrderService', '$state',
        function ($scope, $location, $window, $filter, OrderService, $state) {
            $scope.showModal = showModal;
            $scope.userInput = [];
            $scope.search = "";
            $scope.selected = "";
            var page = 1;
            var prod = [];
            function showModal() {
                $('#createOrder').modal('show');
            }
            //function getProd(page) {
            //    OrderService.getAllOrders(page)
            //        .success(function (result) {
            //            return result;
            //        });
            //}

            var x = 1;
            var loopArray = function () {
                customAlert(x, function (result) {
                    if (result.length > 0) {
                        x++;
                        loopArray();
                    }
                    else {
                        console.log(prod.length);
                        $scope.Orders = prod;
                    }
                });
            }


            loopArray();

            function customAlert(x, callback) {
                OrderService.getAllOrders(x)
                    .success(function (result) {
                        $.merge(prod, result);
                        callback(result);
                    });
            }

            
            $scope.Save = function () {
                angular.element('#createOrder .close').click();
                setTimeout(function () {
                    $location.path("/app/createorders");
                    $scope.$apply();
                }, 10);
            }

            $scope.getOrders = function () {
                OrderService.getAllOrders(page)
                    .success(function (result) {
                        $scope.Orders = result;
                    });
            };
            $scope.getOrders();


            
            $scope.getCustomers = function (Customerpage) {
                
                OrderService.getCustomers(Customerpage)
                    .success(function (result) {
                        $scope.items = result;
                        
                    });
            };

            $scope.getCustomers();
            

            $scope.clickThis = function (val) {
                $state.go("app.createorders", { id: val});
            }
            $scope.delete = function(id)
            {                
                OrderService.deleteorder(id)
                    .success(function (result) {
                        $scope.getOrders();
                        $scope.Orders.splice(id, 1)
                    });
                
            }
            
            $scope.createOrder = function (form)
            {            	
            	$('#createOrder').modal('hide');
                OrderService.CreateOrder(form)
                    .success(function (result) {
                        $scope.newOrder = result.data;
                        $state.go("app.createorders", { id: result.data._id});
                    });

                
                
            }
        }
       

        
    ]);
