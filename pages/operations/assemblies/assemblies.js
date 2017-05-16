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

        //$scope.regex = '\ASM-'+$scope.date;
       // alert($scope.regex)
       // $scope.user.assembly= $scope.regex;

        function showModal() {
            $('#createOrEdit').modal('show');
        }

      $scope.Save=function(){
            //$('#createOrEdit').modal('hide');
            angular.element('#createOrEdit .close').click();
            
             //$scope.$modalInstance.close();
           setTimeout(function(){
            console.log('dadadad');
              $location.path("/app/assemblies_builder" );
              $scope.$apply();
           },10);
           // $window.location.hash = '#/' + app/assemblies_builder;
      }

    }]);
