(function() {
    'use strict';

    angular.module('app')
        .factory('editOrderService', editOrderService);

    /** @ngInject */
    function editOrderService($http, SETTINGS, $q) {

        var editOrder = {};

        return {
            getOrder: getOrder,
            getAllProducts: getAllProducts,

        };

        /** @ngInject */
        function getOrder(getid) {
            
            return $http({
                    method: 'GET',
                    url: SETTINGS.ORDER_GETBYID_SERVICE + getid,
                })
                .success(function(data) {
                    return data;
                })
                .error(function(data) {})
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

