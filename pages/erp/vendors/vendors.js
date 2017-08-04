'use strict';

/* Controllers */

angular.module('app')
    .controller('VendorsCtrl', ['$scope', '$location', '$window', '$filter', 'VendorService', '$state',
        function ($scope, $location, $window, $filter, VendorService, $state) {
            $scope.showModal = showModal;
            $scope.search = "";
            var page = 1;

            function showModal() {
            }

            $scope.getVendors = function () {
                VendorService.getAllVendors(page)
                    .success(function (result) {
                        $scope.Vendors = result;
                    });
            };
            $scope.getVendors();
        }
    ]);
