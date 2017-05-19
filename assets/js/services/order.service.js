(function() {
    'use strict';

    angular.module('app')
        .factory('OrderService', OrderService);

    /** @ngInject */
    function OrderService($http, SETTINGS, $q) {

        var orders = {};

        return {
            getAllOrders: getAllOrders,

        };

        /** @ngInject */
        function getAllOrders() {
            return $http({
                    method: 'GET',
                    url: SETTINGS.ORDER_GET_SERVICE,
                })
                .success(function(data) {
                    return data;
                })
                .error(function(data) {})
        }
    }
})();

