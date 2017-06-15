(function() {
    'use strict';

    angular.module('app')
        .factory('ProductService', ProductService);

    /** @ngInject */
    function ProductService($http, SETTINGS, $q) {
        //var myList = [];
        //var products = {};

        var productData = [];
        
        return {
            getAllProducts: getAllProducts,
            //getList: getList,
            //addList: addList,
        };
        //var addList = function (newObj) {
        //    myList.push(newObj);
        //}


        //var getList = function () {
        //    return myList;
        //}
        /** @ngInject */
        function getAllProducts(page) {
                    
            return $http({
                    method: 'GET',
                    url: SETTINGS.PRODUCT_GET_PRODUCT + page,
                })
                .success(function (data) {
                    //$.merge(productData, data);
                    //productData.push(data);
                    //console.log(productData);
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

