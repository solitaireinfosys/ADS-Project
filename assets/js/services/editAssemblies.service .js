(function () {
	'use strict';

	angular.module('app')
        .factory('editAssembliesService', editAssembliesService);

	/** @ngInject */
	function editAssembliesService($http, SETTINGS, $q, $location) {

		var editAssemblies = {};

		return {
			getAssemblies: getAssemblies,
			getAllProducts: getAllProducts,
			saveassembly: saveassembly,
			updateassembly: updateassembly,
			getorderbyid: getorderbyid,

		};

		/** @ngInject */
		function getorderbyid(getid) {
			return $http({
				method: 'GET',
				url: SETTINGS.ASSEMBLIES_GETBYID_SERVICE + getid,
			})
                .success(function (data) {
                	return data;
                })
                .error(function (data) { })
		}


		function getAssemblies(getid) {

			return $http({
				method: 'GET',
				url: SETTINGS.ASSEMBLIES_GETBYID_SERVICE + getid,
			})
                .success(function (data) {
                	return data;
                })
                .error(function (data) { })
		}

		function getAllProducts() {
			return $http({
				method: 'GET',
				url: SETTINGS.PRODUCT_GET_PRODUCT,
			})
                .success(function (data) {
                	return data;
                })
                .error(function (data) { })
		}


		function saveassembly(val) {
			var data = [];

			for (var i = 0; i < val.length; i++) {
				data.push({
					"name": "" + val[i].name + "",
					"qty": "" + val[i].order_quantity_maximum + "",
					"availability": "" + val[i].availability + "",
					"cost_price": "" + val[i].cost_price + "",
					"calculated_price": "" + val[i].calculated_price + "",
					"description": "" + val[i].description + "",
				});
			}
			return $http({
				method: 'POST',
				url: SETTINGS.BUNDLE_GET_SERVICE,
				data: {
					"products": data
				}
			})
                .success(function (data) {
                	$location.path("/app/assemblies");
                	return data;
                })
                .error(function (data) { })
		}

		function updateassembly(val, assemblyid, assemblyname, getid) {

			//var data = [];

			//for (var i = 0; i < val.length; i++) {
			//    data.push({
			//        "id": val[i].id,
			//        "ParentId": val[i].ParentId,
			//        "name": "" + val[i].name + "",
			//        "qty": "" + val[i].qty + "",
			//        "available": "" + val[i].available + "",
			//        "cost": "" + val[i].cost + "",
			//        "total": "" + val[i].total + "",
			//        "description": "" + val[i].description + "",
			//    });
			//}

			var str = assemblyid + ',' + assemblyname;
			return $http({
				method: 'PUT',
				url: SETTINGS.UPDATE_BUNDLE_BY_ID + getid,
				data: {
					"products": val,
					"name": {
						"String": {
							str
						}
					}
				}
			})
                .success(function (data) {
                	$location.path("/app/assemblies");
                	return data;
                })
                .error(function (data) { })
		}
	}
})();

