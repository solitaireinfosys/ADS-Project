'use strict';

/* Controllers */

angular.module('app')
    .controller('AssembliesCtrl', ['$scope','$location','$window','$filter',
        function($scope,$location,$window,$filter) {

	    $scope.showModal = showModal;
        $scope.time=Date.now();
        $scope.date = new Date();
        $scope.date =   "ASM-" + $filter('date')($scope.date, 'MMddyyyyhhmm');
        $scope.regex = /^ASM-([0-9]{12})$/;

        function showModal() {
            $('#createOrEdit').modal('show');
        }

      $scope.Save=function(){
            angular.element('#createOrEdit .close').click();
            setTimeout(function(){
              $location.path("/app/assemblies_builder" );
              $scope.$apply();
           },10);
      }

    }]);
