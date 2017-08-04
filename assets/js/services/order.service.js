(function () {
    'use strict';

    angular.module('app')
        .factory('OrderService', OrderService);

    /** @ngInject */
    function OrderService($http, SETTINGS, $q) {

        var orders = {};

        return {
            getAllOrders: getAllOrders,
            CreateOrder: CreateOrder,
            getCustomers: getCustomers,
            deleteorder: deleteorder,
            getOrderById: getOrderById
        };
        function deleteorder(id) {
            return $http({
                method: 'DELETE',
                url: SETTINGS.ORDER_GETBYID_SERVICE + id,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }
        /** @ngInject */
        function getAllOrders(page) {
            return $http({
                method: 'GET',
                url: SETTINGS.ORDER_GET_SERVICE + page,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }

        function getOrderById(id) {
            return $http({
                method: 'GET',
                url: SETTINGS.ORDER_GETBYID_SERVICE + id,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }


        function getCustomers(page) {

            return $http({
                method: 'GET',
                url: SETTINGS.CUSTOMER_GET_SERVICE + page,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }

        function CreateOrder(form) {
            return $http({
                method: 'POST',
                url: SETTINGS.ORDER_GET_SERVICE,
                data: {
                    "description": form.description,
                    "customerId": form.selected.id,
                    "status": "NEW"
                }
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })

        }
    }
})();

