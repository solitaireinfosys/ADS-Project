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
            getAssemblies: getAssemblies,
            updateorder:updateorder,
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


        function getAssemblies() {
            
            return $http({
                    method: 'GET',
                    url: SETTINGS.BUNDLE_GET_SERVICE,
                })
                .success(function(data) {
                    return data;
                })
                .error(function(data) {})
        }

        function updateorder(val, getid) {
            var data = [];

            for (var i = 0; i < val.length; i++) {
                data.push({
                    "name": "" + val[i].name + "", //val[i].name,
                    "qty": "" + val[i].order_quantity_maximum + "",
                    "availability": "" + val[i].availability + "",
                    "cost_price": "" + val[i].cost_price + "",
                    "calculated_price": "" + val[i].calculated_price + "",
                    "description": "" + val[i].description + "",
                });
            }
            return $http({
                method: 'PUT',
                url: SETTINGS.ORDER_GETBYID_SERVICE + getid,
                data: {
                    "products": data
                }
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

