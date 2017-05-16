'use strict';

/* Controllers */

angular.module('app')
    .controller('AssembliesCtrl', ['$scope','$location','$window','$filter',
        function($scope,$location,$window,$filter) {

	    $scope.showModal = showModal;
        $scope.time=Date.now();
        $scope.date = new Date();
        $scope.date =   $filter('date')($scope.date, 'MMddyyyyhmm');
        $scope.regex = '^(?!apple$|juice$|orange$).*$';

        //$scope.regex = '\ASM-'+$scope.date;
       // alert($scope.regex)
       // $scope.user.assembly= $scope.regex;

        function showModal() {
            $('#createOrEdit').modal('show');
        }

      $scope.Save=function(){
            $('#createOrEdit').modal('hide');
             //$scope.$modalInstance.close();
           $location.path("/app/assemblies_builder" );
           // $window.location.hash = '#/' + app/assemblies_builder;
      }

    }]);
