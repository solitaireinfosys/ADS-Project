angular.module('app')
    .constant('SETTINGS', (function() {
        // Define your variable
        var MS00 = 'http://ec2-54-215-254-100.us-west-1.compute.amazonaws.com:64000';
        var MS06 = 'http://ec2-54-183-115-168.us-west-1.compute.amazonaws.com:8080/api';
        var MS08 = 'http://ec2-52-52-101-206.us-west-1.compute.amazonaws.com:8080/api';
        var MS10 = 'http://ec2-52-52-101-206.us-west-1.compute.amazonaws.com:8080/api';
        //var MS13 = 'http://ec2-54-153-67-154.us-west-1.compute.amazonaws.com:8080/api';
        var MS13 = 'http://ec2-13-58-229-135.us-east-2.compute.amazonaws.com:64013/api';
        // Use the variable in your constants
        return {
            API_URL: MS06,
            AUTH_SERVICE: MS00 + '/sessions',
            USER_PROFILE: MS00 + '/config/user-profile',
            MATERIALS_SERVICE: MS08,
            BILL_OF_MATERIALS_SERVICE: MS10,
            COSTED_BILL_OF_MATERIALS_SERVICE: MS10,
            CUSTOMER_GET_SERVICE: MS13+'/customer?page=',
            ORDER_GET_SERVICE:MS13+'/orders?page=',
            PRODUCT_GET_PRODUCT:MS13+'/products?page=',
            BUNDLE_GET_SERVICE:MS13+'/bundles?page=',
            ORDER_GETBYID_SERVICE: MS13 + '/orders/',
            ASSEMBLIES_GETBYID_SERVICE: MS13 + '/bundles/',
            UPDATE_BUNDLE_BY_ID: MS13 + '/bundles/',
            COMPANY_GET_SERVICE: MS13+'/company?page=',
            // AUTH_TOKEN: token,
                JWT: {
                "name": "smith_token"
            }
        }
    })());
