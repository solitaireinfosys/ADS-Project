'use strict';

/* Controllers */

angular.module('app')
    .controller('AssembliesCtrl', ['$scope', '$location', '$window', '$filter', 'AssembliesService', '$state',
        function ($scope, $location, $window, $filter, AssembliesService, $state) {

            $scope.showModal = showModal;
            $scope.time = Date.now();
            $scope.date = new Date();
            $scope.date = "ASM-" + $filter('date')($scope.date, 'MMddyyyyhhmm');
            $scope.regex = /^ASM-([0-9]{12})$/;

            function showModal() {
                $('#createOrEdit').modal('show');
            }
            $scope.getBundle = function () {
                AssembliesService.getAllBundles()
                    .success(function (result) {
                        $scope.bundles = result;
                    });
            };
            $scope.getBundle();

            $scope.Save = function (val) {
                angular.element('#createOrEdit .close').click();

                AssembliesService.SaveAssemblies(val)
                    .success(function (data) {
                        console.log(data);
                        setTimeout(function () {
                            $state.go("app.assemblies_builder", { id: data.data._id });
                            console.log(val.Assemblyid)
                            //$location.path("/app/assemblies_builder");
                            $scope.$apply();
                        }, 10);

                        return false;
                    })
            }


            $scope.clickThis = function (val) {                
                //$state.go("app.assemblies_builder", { id: val });
                $location.path("/app/assemblies_builder/" + val);
            }

        }]);
