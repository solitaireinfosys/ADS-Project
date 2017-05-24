(function() {
    'use strict';

    angular.module('app')
        .factory('ProductService', ProductService);

    /** @ngInject */
    function ProductService($http, SETTINGS, $q) {

        var products = {};

        return {
            getAllProducts: getAllProducts,

        };

        /** @ngInject */
        function getAllProducts() {
            return $http({
                    method: 'GET',
                    url: SETTINGS.PRODUCT_GET_PRODUCT,
                })
                .success(function(data) {
                    return data;
                })
                .error(function(data) {})
        }

        // function getProductbyId(id){
        //     return $http({
        //         method:'GET',
        //         url:SETTINGS.PRODUCT_GETBYID_SERVICE,
        //     })
        //     .success(function(data){
        //         return data;
        //     })
        //     .error(function(data){})
        // }
    }
})();

