'use strict';

/* Controllers */

angular.module('app')
    .controller('OrdersCtrl', ['$scope', '$location', '$window', '$filter',
        function($scope, $location, $window, $filter) {
            $scope.showModal = showModal;

            function showModal() {
                $('#createOrder').modal('show');
            }
            $scope.Save = function() {
                angular.element('#createOrder .close').click();
                setTimeout(function() {
                    $location.path("/app/createorders");
                    $scope.$apply();
                }, 10);
            }

            $scope.Orders = [{
                'customers':'COCA COLA',
                'description': 'Long text area.',
                'inventory':202,
                'cost':'$100',
                'msrp':'$200',
                'status':'PENDING',
                'actions':[{
                    'action1':'View',
                    'action2':'Edit',
                    'action3':'Delete'
                }],
                
            }]
        }
    ]);
