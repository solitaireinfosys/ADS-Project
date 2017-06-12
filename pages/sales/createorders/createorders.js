'use strict';

/* Controllers */

angular.module('app')
    .controller('CreateOrdersCtrl', function ($rootScope, $stateParams, $scope, $sce, $filter, $http, $compile, $TreeDnDConvert, editOrderService) {
        console.log($stateParams.id);
        var getid = $stateParams.id;
        $scope.ordername = getid;
        var tree;
        var finalData = [];
        
        $scope.leftTreeData = {};
        $scope.leftTreeCtrl = tree = {};
        $scope.showEditModal = showEditModal;
        $scope.notes = "";
        $scope.selectedNode = {};
        $scope.leftTreeExpandProperty = {
            /*template: "<td>OK All</td>",*/
            field: 'name',
            titleClass: 'text-center',
            cellClass: 'v-middle',
            displayName: 'Name'
        };
        $scope.leftTreeCols = [

        ];

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
            editOrderService.getAllProducts()
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
                    
                    $scope.leftTreeData = finalData;
                    $scope.leftTreeData = $TreeDnDConvert.line2tree($scope.leftTreeData, 'id', 'ParentId');
                });
         };

         

        getProducts();
        getorders();

        var rightTree;
        $scope.rightTreeData = {};
        $scope.rightTreeCtrl = rightTree = [];

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
            //$scope.selectedNode.total = parseInt($scope.selectedNode.qty) * parseInt($scope.selectedNode.cost);
            $scope.selectedNode = node;
            $('#createOrEdit').modal('show');
        }

        $scope.SaveNotes = function () {
            $scope.selectedNode.total = parseInt($scope.selectedNode.qty) * parseInt($scope.selectedNode.cost);
            $('#createOrEdit').modal('hide');
        };

        var id = 6;
        $scope.addProductItem = function (val) {
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
                'type': val.node.type,
            };

            if ($scope.rightTreeCtrl.get_selected_node() != null) {
                addedData.ParentId = $scope.rightTreeCtrl.get_selected_node().id;
            }

            $scope.rightTreeCtrl.add_node($scope.rightTreeCtrl.get_selected_node(), addedData);
            $scope.rightTreeCtrl.reload_data();
        }

        $scope.saveOrder = function () {
            console.log($scope.rightTreeData);
            var getid = $stateParams.id;
            editOrderService.updateorder($scope.rightTreeData, getid)
                .success(function (data) {

                })
        }

        function getorders() {
            var getid = $stateParams.id;
            editOrderService.getOrder(getid)
                .success(function (result) {
                    $scope.rightTreeData = result.products;
                    //$scope.rightTreeData = result.products.concat(result.assemblies);
                    $scope.rightTreeData = $TreeDnDConvert.line2tree($scope.rightTreeData, 'id', 'ParentId');
                });
        };


        $scope.editRightCtrlData = function (node) {
            node.edit = true;
        }

        $scope.saveRightCtrlData = function (node) {
            console.log(node);
            node.edit = false;
            node.total = parseInt(node.qty) * parseInt(node.cost);
        }

        //Start left data for Assembly
        var tree;
        var finalAssembliesData = [];
        $scope.leftTreeAssembliesData = {};
        $scope.leftTreeAssembliesCtrl = tree = {};

        $scope.leftTreeExpandAssembliesProperty = {
            /*template: "<td>OK All</td>",*/
            field: 'name',
            titleClass: 'text-center',
            cellClass: 'v-middle',
            displayName: 'Name'
        };

        getAssemblies()
        function getAssemblies() {
            editOrderService.getAssemblies()
                .success(function (result) {
                    
                    finalAssembliesData.push({
                        'id': 1,
                        'ParentId': null,
                        'name': 'Assemblies',
                        'type': 'group',
                    });

                    var count = 1;
                    
                        finalAssembliesData.push({
                            'id': 2,
                            'ParentId': 1,
                            'name': 'Assemblies-Name',
                            'type': 'group',
                        });
                        angular.forEach(result, function (memb,$index) {
                                
                            finalAssembliesData.push({
                                'id':$index + 3,
                                'ParentId': 2,
                                'name': memb._id,
                                'description': memb.description,
                                'type': 'Assemblies',
                            })
                            
                            });
                        count++;
                    $scope.leftTreeAssembliesData = finalAssembliesData;
                    $scope.leftTreeAssembliesData = $TreeDnDConvert.line2tree($scope.leftTreeAssembliesData, 'id', 'ParentId');
                });
        };

        $scope.leftTreeAssembliesCols = [

        ];
        //End left data for Assembly

        
    });
