'use strict';

/* Controllers */

angular.module('app')
    .controller('CompaniesCtrl', ['$scope', '$location', '$window', '$filter', 'CompanyService', '$state',
        function ($scope, $location, $window, $filter, CompanyService, $state) {
            $scope.showModal = showModal;
            $scope.search = "";
            var page = 1;
            function showModal() {
            }

            $scope.getCompanies = function () {
                CompanyService.getAllCompanies(page)
                    .success(function (result) {
                        $scope.Companies = result;
                    });
            };
            $scope.getCompanies();
        }
    ]);
