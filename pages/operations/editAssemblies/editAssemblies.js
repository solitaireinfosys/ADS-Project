'use strict';

/* Controllers */

angular.module('app')
    .controller('editAssembliesCtrl', ['$rootScope', '$scope', '$location', '$window', '$filter', '$stateParams','editAssembliesService',
        function ($rootScope, $scope, $location, $window, $filter, $stateParams, editAssembliesService) {
            $scope.editMode = false;
            $scope.id = $stateParams.id;
            var getid = $scope.id;
            $scope.custom = [];
            $scope.search = "";
            $scope.description = false;


            getAssemblies(getid);
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
            $scope.newSubItem = function (val) {
                console.log(val);
                $scope.custom.push(val.node);
            };

            $scope.remove = function ($index) {
                    $scope.custom.splice($index, 1);
            }
            
            function getAssemblies(getid) {
                
                editAssembliesService.getAssemblies(getid)
                    .success(function (result) {
                        $scope.OrderName = result;
                    });
            };

            function getProducts() {                
                editAssembliesService.getAllProducts()
                    .success(function (result) {
                        $scope.data = result;                        
                    });                
            };

            $scope.editrow = function ()
            {
                $scope.editMode = true;
            }
            $scope.validate = function () {
                $scope.editMode = false;
            };
            $rootScope.$broadcast('angular-ui-tree:collapse-all');
         
        }
    ]);
