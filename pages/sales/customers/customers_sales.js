'use strict';

/* Controllers */

angular.module('app')
    .controller('CustomerSalesCtrl', ['$scope', 'SETTINGS','DTOptionsBuilder', 'DTColumnDefBuilder','DTColumnBuilder',
     function($scope,SETTINGS,DTOptionsBuilder, DTColumnDefBuilder,DTColumnBuilder) {

		var myEl = angular.element(document.querySelector('.sorting_disabled'));
		myEl.removeClass('sorting'); 

     
    }]);
