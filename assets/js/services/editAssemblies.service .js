(function() {
    'use strict';

    angular.module('app')
        .factory('editAssembliesService', editAssembliesService);

    /** @ngInject */
    function editAssembliesService($http, SETTINGS, $q) {

        var editAssemblies = {};

        return {
            getAssemblies: getAssemblies,
            getAllProducts: getAllProducts,

        };

        /** @ngInject */
        function getAssemblies(getid) {
            
            return $http({
                method: 'GET',
                url: SETTINGS.ASSEMBLIES_GETBYID_SERVICE + getid,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }

        function getAllProducts() {
            return $http({
                method: 'GET',
                url: SETTINGS.PRODUCT_GET_PRODUCT,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }
    }
})();

