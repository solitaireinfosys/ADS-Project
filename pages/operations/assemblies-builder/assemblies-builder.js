'use strict';

/* Controllers */

angular.module('app')
.controller('AssembliesBuilderCtrl', function($scope, $sce, $filter, $http, $compile, $TreeDnDConvert) {


    // $http.get('assets/js/api/country_region.json').success(function(data) {
    //     $scope.countries = data.country;
    //     $scope.regions = data.region;
    // });

    var tree;
    $scope.leftTreeData = {};
    $scope.leftTreeCtrl = tree = {};

    $scope.leftTreeExpandProperty = {
        /*template: "<td>OK All</td>",*/
        field: 'name',
        titleClass:  'text-center',
        cellClass:   'v-middle',
        displayName: 'Name'
    };
    $scope.leftTreeCols = [

    ];

    $scope.leftTreeData = [
        {
            'id': 1,
            'ParentId':      null,
            'name': 'PRODUCT CATEGORY_1',
            'type': 'group'
        },{
            'id': 2,
            'ParentId': 1,
            'name': 'PRODUCT TYPE',
            'type': 'group'
        },{
            'id': 3,
            'ParentId': 2,
            'name': 'PRODUCT ITEM PRODUCT SKU',
            'type': 'product',
            'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
        },{
            'id': 4,
            'ParentId': 2,
            'name': 'PRODUCT ITEM PRODUCT SKU',
            'type': 'product',
            'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
        },{
            'id': 5,
            'ParentId': 2,
            'name': 'PRODUCT ITEM PRODUCT SKU',
            'type': 'product',
            'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
        },{
            'id': 6,
            'ParentId': 2,
            'name': 'PRODUCT ITEM PRODUCT SKU',
            'type': 'product',
            'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
        },{
            'id': 7,
            'ParentId': 2,
            'name': 'PRODUCT ITEM PRODUCT SKU',
            'type': 'product',
            'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
        },
    ];

    $scope.leftTreeData = $TreeDnDConvert.line2tree($scope.leftTreeData, 'id', 'ParentId');



    var rightTree;
    $scope.rightTreeData = {};
    $scope.rightTreeCtrl = rightTree = {};


    $scope.rightTreeExpandProperty = {
        /*template: "<td>OK All</td>",*/
        field: 'description',
        cellClass:   'v-middle',
        displayName: 'Product description',
    };

    $scope.currencyFilter = function (data) {
        return $filter('currency')(data);
    }

    $scope.rightTreeCols = [
        {
            field: 'available',
        },{
            field: 'qty',
        },{
            field: 'cost',
            filter: $scope.currencyFilter,
            cellClass:   'text-right',
            titleClass: 'text-right'
        },{
            field: 'total',
            filter: $scope.currencyFilter,
            cellClass:   'text-right',
            titleClass: 'text-right'
        },
        {
            displayName:  '',
            titleTemplate: '<div ng-if="!node.edit">' +
            '               <span class="icon-button icon-edit" title="Edit"></span>&nbsp;' +
            '               <span class="icon-button icon-remove" title="Remove"></span></div>' +
            '<div ng-if="node.edit"><span class="icon-button" ng-click="saveRightCtrlData(node)"><i class="fa fa-save"></i></span></div>',
            cellTemplate: '<div ng-if="!node.edit">' +
            '               <span class="icon-button icon-edit" title="Edit" ng-click="editRightCtrlData(node)"></span>&nbsp;' +
            '               <span class="icon-button icon-remove" title="Remove" ng-click="tree.remove_node(node)"></span></div>' +
                '<div ng-if="node.edit"><span class="icon-button" ng-click="saveRightCtrlData(node)"><i class="fa fa-save"></i></span></div>'
        }
    ];

    // DataDemo.getDatas() can see in 'Custom Option' -> Tab 'Data Demo'
    $scope.rightTreeData = [
        {
            'id': 1,
            'ParentId': null,
            'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
            'available': 100,
            'qty': 212,
            'cost': 1200,
            'total': 212 * 1200,
        },{
            'id': 2,
            'ParentId':      1,
            'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
            'available': 100,
            'qty': 100,
            'cost': 12000,
            'total': 100 * 1200,
        },{
            'id': 3,
            'ParentId':      2,
            'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
            'available': 100,
            'qty': 50,
            'cost': 12000,
            'total': 50 * 1200,
        },{
            'id': 4,
            'ParentId':      2,
            'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
            'available': 100,
            'qty': 60,
            'cost': 12000,
            'total': 60 * 1200,
        },
    ];

    $scope.rightTreeData = $TreeDnDConvert.line2tree($scope.rightTreeData, 'id', 'ParentId');

    var id = 6;
    $scope.addProductItem = function(node) {
        // $http.get('asss').then(function (res) {
        //
        // }, function (err) {
        //
        // });

        $scope.rightTreeCtrl.add_node($scope.rightTreeCtrl.get_selected_node(), {
                'id': id++,
                'ParentId': null,
                'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
                'available': 100,
                'qty': 212,
                'cost': 12000,
                'total': 212 * 1200,
        });
        $scope.rightTreeCtrl.reload_data();
    }

    $scope.editRightCtrlData = function (node) {
        node.edit = true;
    }

    $scope.saveRightCtrlData = function (node) {
        node.edit = false;
    }
});
