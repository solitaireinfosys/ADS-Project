'use strict';

/* Controllers */

angular.module('app')
    .controller('CustomerSalesCtrl', ['$scope', 'SETTINGS','DTOptionsBuilder', 'DTColumnDefBuilder','DTColumnBuilder',
     function($scope,SETTINGS,DTOptionsBuilder, DTColumnDefBuilder,DTColumnBuilder) {

		var myEl = angular.element(document.querySelector('.sorting_disabled'));
		myEl.removeClass('sorting'); 

     	// var tabMenu = angular.element(".sorting_disabled");

      //   tabMenu.removeClass("sorting");
      //    tabMenu.removeClass("sorting_asc");

// $scope.dtOptions = DTOptionsBuilder.newOptions().withDOM('C<"clear">lfrtip');
//        $scope.dtColumnDefs = [
//           DTColumnDefBuilder.newColumnDef(0).notSortable(),
//           DTColumnDefBuilder.newColumnDef(4).notSortable()
//        ];


  			// $scope.dtColumns = [
     //            DTColumnBuilder.newColumn('customer').withTitle('CUSTOMER'),
     //            DTColumnBuilder.newColumn('program').withTitle('PROGRAM').notSortable(),
     //            DTColumnBuilder.newColumn('version').withTitle('VERSION').notSortable(),
     //            DTColumnBuilder.newColumn('qty_materials').withTitle('QTY MATERIALS').notSortable(),
     //            DTColumnBuilder.newColumn('avl').withTitle('AVL').notSortable(),
     //            DTColumnBuilder.newColumn('aml').withTitle('AML').notSortable(),
     //            DTColumnBuilder.newColumn('date_created').withTitle('DATE CREATED').notSortable(),
     //            DTColumnBuilder.newColumn('status').withTitle('STATUS'),
     //            DTColumnBuilder.newColumn('actions').withTitle('ACTIONS').notSortable()
     //       ];
    }]);
