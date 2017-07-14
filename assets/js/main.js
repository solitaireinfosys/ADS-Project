/* ============================================================
 * File: main.js
 * Main Controller to set global scope variables. 
 * ============================================================ */

angular.module('app')
    .controller('AppCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
        
        // Change version here (mm/dd/yyyy)
        $rootScope.versionDate = "07/14/17";
        //

        // App globals
        $scope.app = {
            name: 'Pages',
            description: 'Admin Dashboard UI kit',
            layout: {
                menuPin: false,
                menuBehind: false,
                theme: 'core/css/pages.css'
            },
            author: 'Revox'
        };

        // Checks if the given state is the current state
        $scope.is = function(name) {
            return $state.is(name);
        };

        // Checks if the given state/child states are present
        $scope.includes = function(name) {
            return $state.includes(name);
        };

        // Broadcasts a message to pgSearch directive to toggle search overlay
        $scope.showSearchOverlay = function() {
            $scope.$broadcast('toggleSearchOverlay', {
                show: true
            })
        };

    }]);


angular.module('app')
    /*
        Use this directive together with ng-include to include a 
        template file by replacing the placeholder element
    */
    
    .directive('includeReplace', function() {
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function(scope, el, attrs) {
                el.replaceWith(el.children());
            }
        };
    });


angular.module('ui.tree', [])
    .constant('treeConfig', {
        treeClass: 'angular-ui-tree',
        emptyTreeClass: 'angular-ui-tree-empty',
        hiddenClass: 'angular-ui-tree-hidden',
        nodesClass: 'angular-ui-tree-nodes',
        nodeClass: 'angular-ui-tree-node',
        handleClass: 'angular-ui-tree-handle',
        placeholderClass: 'angular-ui-tree-placeholder',
        dragClass: 'angular-ui-tree-drag',
        dragThreshold: 3,
        defaultCollapsed: true,
        appendChildOnHover: false
    });