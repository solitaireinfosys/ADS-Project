'use strict';

/* Controllers */

angular.module('app')
    .controller('editOrdersCtrl', ['$rootScope', '$scope', '$location', '$window', '$filter','$stateParams','editOrderService',
        function ($rootScope, $scope, $location, $window, $filter, $stateParams,editOrderService) {
            $scope.id = $stateParams.id;
            var getid = $scope.id;
            
            $scope.search = "";
            var jsondata = [{
                'id': 1,
                'title': 'amit',
                'nodes': [
                    {
                        'id': 11,
                        'title': 'amit_bug',
                        'nodes': [
                            {
                                'id': 111,
                                'title': 'tenant',
                                'nodes': []
                            }
                        ]
                    },
                    {
                        'id': 12,
                        'title': 'node1.2',
                        'nodes': []
                    }
                ]
            }, {
                'id': 2,
                'title': 'node2',
                'nodrop': true,
                'nodes': [
                    {
                        'id': 21,
                        'title': 'node2.1',
                        'nodes': []
                    },
                    {
                        'id': 22,
                        'title': 'node2.2',
                        'nodes': []
                    }
                ]
            }, {
                'id': 3,
                'title': 'node3',
                'nodes': [
                    {
                        'id': 31,
                        'title': 'node3.1',
                        'nodes': []
                    }
                ]
            }];
            getOrders(getid);
            getProducts();
            $scope.visible = function (item) {
                console.log(item)
                return !($scope.query && $scope.query.length > 0
                    && item.name[$index]($scope.query) == -1);

            };
            //$rootScope.collapsed = true;
            $scope.remove = function (scope) {
                scope.remove();
            };
            $scope.toggle = function (scope) {
                scope.toggle();
            };
            $scope.moveLastToTheBeginning = function () {
                var a = $scope.data.pop();
                $scope.data.splice(0, 0, a);
            };
            $scope.newSubItem = function (scope) {
                console.log(scope);
                var nodeData = scope.$modelValue;
                nodeData.nodes.push({
                    id: nodeData.id * 10 + nodeData.nodes.length,
                    title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                    nodes: []
                });
            };

            function getOrders(getid) {
                
                editOrderService.getOrder(getid)
                    .success(function (result) {
                        console.log(result)
                        $scope.OrderName = result;
                    });
            };

            function getProducts() {                
                editOrderService.getAllProducts()
                    .success(function (result) {
                        //console.log(result)
                        $scope.data = result;                        
                    });                
            };

            $rootScope.$broadcast('angular-ui-tree:collapse-all');
            //$scope.data = jsondata;

         
        }
    ]);
