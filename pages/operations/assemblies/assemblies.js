'use strict';

/* Controllers */

angular.module('app')
    .controller('AssembliesCtrl', ['$scope', '$location', '$window', '$filter', 'AssembliesService', '$state',
        function ($scope, $location, $window, $filter, AssembliesService, $state) {
        	$scope.search = "";
        	$scope.showModal = showModal;
        	$scope.time = Date.now();
        	$scope.date = new Date();
        	$scope.date = "ASM-" + $filter('date')($scope.date, 'MMddyyyyhhmm');
        	$scope.regex = /^ASM-([0-9]{12})$/;
            var page = 1;
            var prod = [];
        	function showModal(form) {
        		$('#createOrEdit').modal('show');

            }


            function getProd(page) {
                AssembliesService.getAllBundles()
                    .success(function (result) {
                        $scope.bundles = result;
                    });
            }

            var x = 1;
            var loopArray = function () {
                customAlert(x, function (result) {
                    if (result.length > 0) {
                        x++;
                        loopArray();
                    }
                    else {
                        console.log(prod.length);
                        $scope.bundles = prod;
                    }
                });
            }


            /*loopArray();

            function customAlert(x, callback) {

                AssembliesService.getAllBundles(x)
                    .success(function (result) {
                        $.merge(prod, result);
                        $scope.bundles = result;
                        callback(result);
                    });
            }*/


        	$scope.getBundle = function () {
        		AssembliesService.getAllBundles()
                    .success(function (result) {
                    	$scope.bundles = result;
                        console.log(result);
                    });
        	};
        	$scope.getBundle();
        	var name = "";

        	$scope.Save = function (val) {
        		angular.element('#createOrEdit .close').click();

                console.log(val);

        		AssembliesService.SaveAssemblies(val)
                    .success(function (data) {
                    	$scope.getBundle();
                        $state.go("app.assemblies_builder", { id: val.Assemblyid });
                    });
        	}
        	$scope.deleteBundle = function (id) {
        		AssembliesService.deletebundle(id)
                    .success(function (result) {
                    	$scope.getBundle();
                    });
        	}

        	$scope.clickThis = function (val) {
        		$state.go("app.assemblies_builder", { id: val });
        		//$location.path("/app/assemblies_builder/" + val);
        	}

            $scope.viewAssembly = function(id) {
                $state.go("app.assemblies_builder", { id: id });
            }

        }]);
