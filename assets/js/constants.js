angular.module('app')
    .constant('SETTINGS', (function() {
        // Define your variable
        var MS00 = 'http://ec2-54-193-113-199.us-west-1.compute.amazonaws.com:8000';
        var MS06 = 'http://ec2-54-183-115-168.us-west-1.compute.amazonaws.com:8080/api';
        var MS08 = 'http://ec2-52-52-101-206.us-west-1.compute.amazonaws.com:8080/api';
        var MS10 = 'http://ec2-52-52-101-206.us-west-1.compute.amazonaws.com:8080/api';
        //var MS13 = 'http://ec2-54-153-67-154.us-west-1.compute.amazonaws.com:8080/api';
        var MS13 = 'http://ec2-54-153-12-150.us-west-1.compute.amazonaws.com:8080/api';
        // Use the variable in your constants
        return {
            API_URL: MS06,
            AUTH_SERVICE: MS00 + '/sessions',
            USER_PROFILE: MS00 + '/config/user-profile',
            MATERIALS_SERVICE: MS08,
            BILL_OF_MATERIALS_SERVICE: MS10,
            COSTED_BILL_OF_MATERIALS_SERVICE: MS10,
            CUSTOMER_GET_SERVICE: MS13+'/customer?page=1',
            ORDER_GET_SERVICE:MS13+'/orders?page=1',
            PRODUCT_GET_PRODUCT:MS13+'/products?page=1',
            BUNDLE_GET_SERVICE:MS13+'/bundles?page=1',
            ORDER_GETBYID_SERVICE: MS13 + '/orders/',
            ASSEMBLIES_GETBYID_SERVICE: MS13 + '/bundles/',
            UPDATE_BUNDLE_BY_ID: MS13+'/bundles/',
            // AUTH_TOKEN: token,
                JWT: {
                "name": "smith_token"
            }
        }
    })());
