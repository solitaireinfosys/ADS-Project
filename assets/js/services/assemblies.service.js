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
        function getAllBundles() {
            return $http({
                    method: 'GET',
                    url: SETTINGS.BUNDLE_GET_SERVICE,
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
            return $http({
                method: 'POST',
                url: SETTINGS.BUNDLE_GET_SERVICE,
                data: {
                    "status":"NEW",
                    "name": {
                        "String": {
                            "Assembly_id": form.Assemblyid,
                            "Assembly_Name": form.Name,
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

