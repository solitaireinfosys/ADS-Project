(function () {
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
            updateorder: updateorder,
        };

        /** @ngInject */
        function getOrder(getid) {

            return $http({
                method: 'GET',
                url: SETTINGS.ORDER_GETBYID_SERVICE + getid,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }


        function getAssemblies() {

            return $http({
                method: 'GET',
                url: SETTINGS.BUNDLE_GET_SERVICE,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }

        function updateorder(val, getid) {
            console.log(val);
            var assembliesdata = [];
            var productsdata = [];
            //for (var i = 0; i < val.length; i++) {
            //    if (val[i].type == "products") {
            //        productsdata.push({
            //            "id": "" + val[i].id + "",
            //            "ParentId": "" + val[i].ParentId + "",
            //            "name": "" + val[i].name + "",
            //            "qty": "" + val[i].qty + "",
            //            "available": "" + val[i].available + "",
            //            "cost": "" + val[i].cost + "",
            //            "total": "" + val[i].total + "",
            //            "description": "" + val[i].description + "",
            //            "type": "" + val[i].type + "",
            //        });
            //    }
            //    else {
            //        assembliesdata.push({
            //            "_id": "" + val[i]._id + "",
            //            "name": "" + val[i].name + "",
            //            "qty": "" + val[i].qty + "",
            //            "availability": "" + val[i].availability + "",
            //            "cost_price": "" + val[i].cost_price + "",
            //            "calculated_price": "" + val[i].calculated_price + "",
            //            "description": "" + val[i].description + "",
            //            "type": "" + val[i].type + "",
            //        });
            //    }
            //}

            return $http({
                method: 'PUT',
                url: SETTINGS.ORDER_GETBYID_SERVICE + getid,
                data: {

                    "products": val,
                    "assemblies": assembliesdata
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

