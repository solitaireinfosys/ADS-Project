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

        function SaveAssemblies(form) {
            return $http({
                method: 'POST',
                url: SETTINGS.BUNDLE_GET_SERVICE,
                data: {
                    "_id": form.Assemblyid,
                    "name": {
                        "String": form.Name
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

