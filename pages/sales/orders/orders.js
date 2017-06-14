'use strict';

/* Controllers */

angular.module('app')
    .controller('OrdersCtrl', ['$scope', '$location', '$window', '$filter', 'OrderService', '$state',
        function ($scope, $location, $window, $filter, OrderService, $state) {
            $scope.showModal = showModal;
            $scope.userInput = [];
            $scope.search = "";
            $scope.selected = "";
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

            $scope.getCustomers = function () {
                OrderService.getCustomers()
                    .success(function (result) {
                        $scope.items = result;
                        
                    });
            };

            $scope.getCustomers();
            $scope.getOrders();

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
