(function () {
    'use strict';

    angular.module('app')
        .factory('CompanyService', CompanyService);

    /** @ngInject */
    function CompanyService($http, SETTINGS, $q) {

        var companies = {};

        return {
            getAllCompanies: getAllCompanies,
        };
        
        /** @ngInject */
        function getAllCompanies(page) {
            return $http({
                method: 'GET',
                url: SETTINGS.COMPANY_GET_SERVICE + page,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }
    }
})();

