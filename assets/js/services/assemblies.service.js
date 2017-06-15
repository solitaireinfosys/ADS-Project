(function() {
    'use strict';

    angular.module('app')
        .factory('AssembliesService', AssembliesService);

    /** @ngInject */
    function AssembliesService($http, SETTINGS, $q) {

        var assemblies = {};

        return {
            getAllBundles: getAllBundles,
            SaveAssemblies: SaveAssemblies,
            deletebundle: deletebundle,

        };

        /** @ngInject */
        function getAllBundles(page) {
            return $http({
                    method: 'GET',
                    url: SETTINGS.BUNDLE_GET_SERVICE + page,
                })
                .success(function(data) {
                    return data;
                })
                .error(function(data) {})
        }
        function deletebundle(id)
        {
            return $http({
                method: 'DELETE',
                url: SETTINGS.UPDATE_BUNDLE_BY_ID + id,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }


        function SaveAssemblies(form) {
        	var str = form.Assemblyid + ',' + form.Name;
            return $http({
                method: 'POST',
                url: SETTINGS.BUNDLE_GET_SERVICE,
                data: {
                    "status":"NEW",
                    "name": {
                        "String": {
                        	str
                        }
                    }
                }
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }
    }
})();

