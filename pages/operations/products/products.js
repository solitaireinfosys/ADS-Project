'use strict';

/* Controllers */

angular.module('app')
    .controller('ProductsCtrl', ['$scope', '$location', '$window', '$filter',
        function($scope, $location, $window, $filter) {

            $scope.group1 = [{
                title: "PRODUCT",
                icon: "glyphicon glyphicon-education",
                items: [{ "item-title": "PRODUCT 1" }, { "item-title": "PRODUCT 2" }]
            }, {
                title: "TYPE",
                icon: "glyphicon glyphicon-list-alt",
                items: [{ "item-title": "TYPE 3" }, { "item-title": "TYPE 4" }]
            },];
              $scope.group2 = [{
                title: "BRAND",
                icon: "glyphicon glyphicon-list-alt",
                items: [{ "item-title": "BRAND 1" }, { "item-title": "BRAND 2" }]
            }, {
                title: "APPLICATION",
                icon: "glyphicon glyphicon-list-alt",
                items: [{ "item-title": "APPLICATION 3" }, { "item-title": "APPLICATION 4" }]
            },];


        }
    ]);
