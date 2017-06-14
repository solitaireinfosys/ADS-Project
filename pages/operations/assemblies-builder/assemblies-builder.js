'use strict';

/* Controllers */
angular.module('app')
    .controller('AssembliesBuilderCtrl', function ($rootScope, $scope, $sce, $window, $filter, $http, $compile, $stateParams, $TreeDnDConvert, editAssembliesService) {
        
        
        var getid = $stateParams.id;
        $scope.getid = $stateParams.id;
        
        console.log($stateParams)
        var tree;
        var finalData = [];
        $scope.leftTreeData = {};
        $scope.showEditModal = showEditModal;
        $scope.notes = "";
        $scope.selectedNode = {};
        $scope.leftTreeCtrl = tree = {};

        $scope.leftTreeExpandProperty = {
            field: 'name',
            titleClass: 'text-center',
            cellClass: 'v-middle',
            displayName: 'Name'
        };
        $scope.leftTreeCols = [

        ];
        getAssemblies();
        
       
       
        var id = 6;
        $scope.addProductItem = function (node) {

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
            console.log($scope.rightTreeData);
        }
        function getProducts() {
            editAssembliesService.getAllProducts()
                .success(function (result) {

                    finalData.push({
                        'id': 1,
                        'ParentId': null,
                        'name': 'PRODUCT GROUP',
                        'type': 'group',
                    });

                    var groupBy = function (xs, key) {
                        return xs.reduce(function (rv, x) {
                            (rv[x[key]] = rv[x[key]] || []).push(x);
                            return rv;
                        }, {});
                    };
                    var groubedByBrand = groupBy(result, 'brand_id')
                    var count = 1;
                    Object.keys(groubedByBrand).forEach(function (brand) {
                        finalData.push({
                            'id': brand,
                            'ParentId': 1,
                            'name': 'Brand Name',
                            'type': 'brand',
                        });


                        groubedByBrand[brand].forEach(function (memb, i) {
                            
                            finalData.push({
                                'id': memb.id,
                                'ParentId': brand,
                                'available': memb.availability,
                                'qty': memb.inventory_level,
                                'name': memb.name,
                                'cost': memb.price,
                                'type': memb.open_graph_type,
                                'description': memb.description
                            })
                        })

                        count++;
                    });

                    //var actualData = [
                    //    {
                    //        'id': 1,
                    //        'ParentId': null,
                    //        'name': 'PRODUCT GROUP',
                    //        'type': 'group'
                    //    }, {
                    //        'id': 2,
                    //        'ParentId': 1,
                    //        'name': 'Product GROUPaaa',
                    //        'type': 'group'
                    //    }, {
                    //        'id': 3,
                    //        'ParentId': 2,
                    //        'name': 'Product Item Product SKU',
                    //        'type': 'product',
                    //        'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
                    //    }, {
                    //        'id': 4,
                    //        'ParentId': 2,
                    //        'name': 'Product Item Product SKU',
                    //        'type': 'product',
                    //        'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
                    //    }, {
                    //        'id': 5,
                    //        'ParentId': 2,
                    //        'name': 'Product Item Product SKU',
                    //        'type': 'product',
                    //        'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
                    //    }, {
                    //        'id': 6,
                    //        'ParentId': 2,
                    //        'name': 'Product Item Product SKU',
                    //        'type': 'product',
                    //        'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
                    //    }, {
                    //        'id': 7,
                    //        'ParentId': 2,
                    //        'name': 'Product Item Product SKU',
                    //        'type': 'product',
                    //        'description': 'Product Description - A bunch of text goes here to show much detail can fit into one line of text here'
                    //    },
                    //];

                    $scope.leftTreeData = finalData;
                    $scope.leftTreeData = $TreeDnDConvert.line2tree($scope.leftTreeData, 'id', 'ParentId');
                });
        };

        getProducts();


        var rightTree;
        $scope.rightTreeData = {};
        $scope.rightTreeCtrl = rightTree = {};


        $scope.rightTreeExpandProperty = {
            /*template: "<td>OK All</td>",*/
            field: 'description',
            cellClass: 'v-middle',
            displayName: 'Product description',
        };

        $scope.currencyFilter = function (data) {
            return $filter('currency')(data);
        }

        $scope.rightTreeCols = [
            {
                field: 'available',
            }, {
                field: 'qty',
            }, {
                field: 'cost',
                filter: $scope.currencyFilter,
                cellClass: 'text-right',
                titleClass: 'text-right'
            }, {
                field: 'total',
                filter: $scope.currencyFilter,
                cellClass: 'text-right',
                titleClass: 'text-right'
            },
            {
                displayName: '',
                titleTemplate: '<div ng-if="!node.edit">' +
                '               <span class="icon-button icon-edit" title="Edit"></span>&nbsp;' +
                '               <span class="icon-button icon-remove" title="Remove"></span></div>' +
                '<div ng-if="node.edit"><span class="icon-button" ng-click="saveRightCtrlData(node)"><i class="fa fa-save"></i></span></div>',
                //cellTemplate: '<div ng-if="!node.edit">' +
                //'               <span class="icon-button icon-edit" title="Edit" ng-click="editRightCtrlData(node)"></span>&nbsp;' +
                //'               <span class="icon-button icon-remove" title="Remove" ng-click="tree.remove_node(node)"></span></div>' +
                //'<div ng-if="node.edit"><span class="icon-button" ng-click="saveRightCtrlData(node)"><i class="fa fa-save"></i></span></div>'
                cellTemplate: '<div ng-if="!node.edit">' +
                '               <span class="icon-button icon-edit" title="Edit" ng-click="showEditModal(node)"></span>&nbsp;' +
                '               <span class="icon-button icon-remove" title="Remove" ng-click="tree.remove_node(node)"></span></div>' +
                '<div ng-if="node.edit"><span class="icon-button" ng-click="saveRightCtrlData(node)"><i class="fa fa-save"></i></span></div>'
            }
        ];

        function showEditModal(node) {
            node.selectedNode = parseInt(node.qty) * parseInt(node.cost);
            $scope.selectedNode = node;
            $('#createOrEdit').modal('show');
        }

        $scope.SaveNotes = function () {
            $scope.selectedNode.total = parseInt($scope.selectedNode.qty) * parseInt($scope.selectedNode.cost);
            $('#createOrEdit').modal('hide');
        };

        //DataDemo.getDatas() can see in 'Custom Option' -> Tab 'Data Demo'
        //$scope.rightTreeData = [
        //    {
        //        'id': 1,
        //        'ParentId': null,
        //        'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
        //        'available': 100,
        //        'qty': 212,
        //        'cost': 1200,
        //        'total': 212 * 1200,
        //    }, {
        //        'id': 2,
        //        'ParentId': 1,
        //        'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
        //        'available': 100,
        //        'qty': 100,
        //        'cost': 12000,
        //        'total': 100 * 1200,
        //    }, {
        //        'id': 3,
        //        'ParentId': 2,
        //        'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
        //        'available': 100,
        //        'qty': 50,
        //        'cost': 12000,
        //        'total': 50 * 1200,
        //    }, {
        //        'id': 4,
        //        'ParentId': 2,
        //        'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
        //        'available': 100,
        //        'qty': 60,
        //        'cost': 12000,
        //        'total': 60 * 1200,
        //    },
        //];


        //$scope.rightTreeData = [];
        //$scope.rightTreeData = $TreeDnDConvert.line2tree($scope.rightTreeData, 'id', 'ParentId');

        var id = 6;
        $scope.rightPanelData = [];
        $scope.addProductItem = function (val) {
            
            //$scope.rightTreeCtrl.add_node($scope.rightTreeCtrl.get_selected_node(), {
            //    'id': id++,
            //    'ParentId': null,
            //    'description': 'Product Description - A bunch of text goes here to show how much detail can fit into one line of text here',
            //    'available': 100,
            //    'qty': 212,
            //    'cost': 12000,
            //    'total': 212 * 1200,
            //});
            //$scope.rightTreeCtrl.reload_data();

            console.log('start');
            //console.log(val.node);
            console.log($scope.rightTreeCtrl.get_selected_node());

            var addedData = {
                'id': id++,
                'ParentId': null,
                'name': val.node.name,
                'description': val.node.description,
                'available': val.node.available,
                'qty': val.node.qty,
                'cost': val.node.cost,
                'total': val.node.qty * val.node.cost,
            };

            if ($scope.rightTreeCtrl.get_selected_node() != null) {
                addedData.ParentId = $scope.rightTreeCtrl.get_selected_node().id;
            }

            $scope.rightTreeCtrl.add_node($scope.rightTreeCtrl.get_selected_node(), addedData);            
            $scope.rightTreeCtrl.reload_data();            
        }

        $scope.saveAssembly = function () {
            var getid = $stateParams.id;
            console.log($scope.rightTreeData)
            editAssembliesService.updateassembly($scope.rightTreeData, $scope.assemblyid, $scope.assemblyname, getid)
                .success(function (data) {

                })
        }

        function getAssemblies() {
            var getid = $stateParams.id;
                editAssembliesService.getAssemblies(getid)
                    .success(function (result) {
                        $scope.assemblyid = result.name.String[0].Assembly_id;
                        $scope.assemblyname = result.name.String[0].Assembly_Name;
                        $scope.rightTreeData = result.products;
                        $scope.rightTreeData = $TreeDnDConvert.line2tree($scope.rightTreeData, 'id', 'ParentId');
                        
                    });
        };

        $scope.editRightCtrlData = function (node) {
            node.edit = true;
        }

        $scope.saveRightCtrlData = function (node) {
            node.edit = false;
            node.total = parseInt(node.qty) * parseInt(node.cost);
        }

    });
