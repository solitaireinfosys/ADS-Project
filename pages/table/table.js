'use strict';

/* Controllers */

angular.module('app')
    .controller('DataTableCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            "sDom": "<'table-responsive't><'row'<p i>>",
            // "destroy": true,
            "order": [[1, "desc"]],
            "oLanguage": {
                "sLengthMenu": "_MENU_ ",
                "sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries"
            },
            "iDisplayLength": 5
        };

        /**
         * DataTables Initialization
         * avoid de-sync between DOM and AngularJS
         * @more-info: https://www.bennadel.com/blog/2892-typeerror-cannot-read-property-childnodes-of-undefined-in-angularjs.htm
         */
        $timeout(initDataTable, 10, false);

        function initDataTable(){
            var table = $('#expandingTable');
            var dataTable = table.dataTable();
            $scope.filter = function(event) {
                dataTable.fnFilter($(event.currentTarget).val());
            };
            table.on('click', 'tbody tr > td:first-child', function () {
                var tr = $(this).closest('tr');
                var row = dataTable.api().row( tr );
                // row.addClass('row-details');

                if ( row.child.isShown() ) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    // Open this row
                    row.child( format(row.data()) ).show();
                    tr.next().addClass('row-details');
                    tr.addClass('shown');
                }
            } );
        }
        function format ( d ) {
            // `d` is the original data object for the row

            return '<table class="table table-inline">'+
                '<tr>'+
                '<td>Full name:</td>'+
                '<td>'+d.name+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>Extension number:</td>'+
                '<td>'+d.extn+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>Extra info:</td>'+
                '<td>And any further details here (images etc)...</td>'+
                '</tr>'+
                '</table>';
        }
    }]);


