(function () {
    angular.module('app')
        .factory("PurchaseOrderService", PurchaseOrderService);

    function PurchaseOrderService($http, SETTINGS, $q) {
        var vendors = {};

        return {
            getAllPurchaseOrders: getAllPurchaseOrders
        };

        function getAllPurchaseOrders(page) {
            return $http({
                method: 'GET',
                url: SETTINGS.PURCHASE_ORDER_GET_SERVICE + page,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }
    }
})();

