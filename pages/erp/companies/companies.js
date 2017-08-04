'use strict';

/* Controllers */

angular.module('app')
    .controller('CompaniesCtrl', ['$scope', '$location', '$window', '$filter', 'CompanyService', '$state',
        function ($scope, $location, $window, $filter, CompanyService, $state) {
            $scope.showModal = showModal;
            $scope.userInput = [];
            $scope.search = "";
            $scope.selected = "";
            var page = 1;
            var prod = [];
            function showModal() {
            }

            $scope.getCompanies = function () {
                CompanyService.getAllCompanies(page)
                    .success(function (result) {
                        $scope.Companies = result;
                        console.log("Companies", result);
                    });
            };
            $scope.getCompanies();
        }
    ]);
