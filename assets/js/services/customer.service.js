(function() {
    'use strict';

    angular.module('app')
        .factory('CustomerService', CustomerService);

    /** @ngInject */
    function CustomerService($http, SETTINGS, $q) {

        var customers = {};

        return {
            getAllCustomers: getAllCustomers,

        };

        /** @ngInject */
        function getAllCustomers(page) {
            return $http({
                    method: 'GET',
                    url: SETTINGS.CUSTOMER_GET_SERVICE + page,
                })
                .success(function(data) {
                    return data;
                })
                .error(function(data) {})
        }
    }
})();


// JavaScript Document

// angular.module('app')


// .factory('CustomerService', function($http, $q, SETTINGS) {

//     var getAllCustomers = {};
//     getAllCustomers.getcusts = function() {
//         return $http.get(SETTINGS.CUSTOMER_GET_SERVICE)
//             .success(function(data) {
//                 return data;
//             })
//             .error(function(data) {})
//     }

//     return getAllCustomers;

// });
