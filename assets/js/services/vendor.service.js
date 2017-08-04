(function () {
    angular.module('app')
        .factory("VendorService", VendorService);

    function VendorService($http, SETTINGS, $q) {
        var vendors = {};

        return {
            getAllVendors: getAllVendors
        };

        function getAllVendors(page) {
            return $http({
                method: 'GET',
                url: SETTINGS.VENDOR_GET_SERVICE + page,
            })
                .success(function (data) {
                    return data;
                })
                .error(function (data) { })
        }
    }
})();

