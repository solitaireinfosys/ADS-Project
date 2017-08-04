'use strict';

/* Controllers */

angular.module('app')
    .controller('PurchaseOrdersCtrl', ['$scope', '$location', '$window', '$filter', 'PurchaseOrderService', '$state',
        function ($scope, $location, $window, $filter, PurchaseOrderService, $state) {
            $scope.showModal = showModal;
            $scope.search = "";
            var page = 1;

            function showModal() {
            }

            $scope.getPurchaseOrders = function () {
                PurchaseOrderService.getAllPurchaseOrders(page)
                    .success(function (result) {
                        $scope.PurchaseOrders = result;
                    });
            };
            $scope.getPurchaseOrders();
        }
    ]);
