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

        	function showModal(form) {
        		$('#createOrEdit').modal('show');

        	}
        	$scope.getBundle = function () {
        		AssembliesService.getAllBundles()
                    .success(function (result) {
                    	$scope.bundles = result;

                    });
        	};
        	$scope.getBundle();
        	var name = "";

        	$scope.Save = function (val) {
        		angular.element('#createOrEdit .close').click();

        		AssembliesService.SaveAssemblies(val)
                    .success(function (data) {
                    	$scope.getBundle();
                    	//console.log(data);
                    	//setTimeout(function () {
                    	//	console.log(name)
                    	//	//$state.go("app.assemblies_builder", { id: data.data._id, name: data.data.name.String[0].Assembly_id });
                    	//	console.log(val.Assemblyid)
                    	//	$scope.$apply();
                    	//}, 10);
                    	//return false;
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

        }]);
