(function() {
    'use strict';

    angular.module('app')
        .factory('AssembliesService', AssembliesService);

    /** @ngInject */
    function AssembliesService($http, SETTINGS, $q) {

        var assemblies = {};

        return {
            getAllBundles: getAllBundles,

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
    }
})();

