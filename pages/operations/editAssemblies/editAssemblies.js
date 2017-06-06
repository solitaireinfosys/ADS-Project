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
            //$scope.name = [];
            $scope.myVar = false;
            $scope.Var = true;
            $scope.OrderName = {};
            
            getAssemblies(getid);
            getProducts();
            

            $scope.visible = function (item) {
                //console.log(item)
                return !($scope.query && $scope.query.length > 0
                    && item.name[$index]($scope.query) == -1);

            };
            $scope.idSelected = null;
           

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
                //console.log(val);
                $scope.custom.push(val.node);
            };

            $scope.remove = function ($index) {
                    $scope.custom.splice($index, 1);
            }
            
            function getAssemblies(getid) {
                
                if (getid != "") {
                    $scope.Var = false
                    $scope.myVar = true;
                    
                    editAssembliesService.getAssemblies(getid)
                        .success(function (result) {
                            $scope.OrderName = result;
                        });
                    getordreid(getid);
                }
                
            };

            function getordreid(val) {
                editAssembliesService.getorderbyid(val)
                    .success(function (result) {
                        $scope.custom = result.products;
                    })
            }


            function getProducts() {                
                editAssembliesService.getAllProducts()
                    .success(function (result) {
                        $scope.data = result;                        
                    });                
            };

            $scope.editrow = function (idSelected)
            {
                $scope.idSelected = idSelected.name;
                
            }
            $scope.validate = function () {
                this.editMode = false;
            };
            $scope.saveAssembly = function (val)
            {
                var getid = $scope.OrderName._id;
                if (getid == undefined)
                {
                    editAssembliesService.saveassembly($scope.custom, getid)
                }
                else
                {
                    editAssembliesService.updateassembly($scope.custom,getid)
                        .success(function (data) {
                         
                        })
                }
                

                    
            }
            $rootScope.$broadcast('angular-ui-tree:collapse-all');
         
        }
    ]);
