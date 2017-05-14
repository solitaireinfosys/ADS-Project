angular.module('app')
    .config(['$stateProvider',

        function($stateProvider) {
            $stateProvider
                .state('app.customers.dashboard', {
                    url: "/customers_dashboard",
                    templateUrl: "pages/customers/dashboard/customers_dashboard.html",
                    controller: 'CustomersDashboardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/customers/dashboard/customers_dashboard.js'
                                ]);
                            });
                        }]
                    }
                })
                .state('app.customers.view', {
                    url: "/customers_view",
                    templateUrl: "pages/customers/view/customers_view.html",
                    controller: 'CustomersViewCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/customers/view/customers_view.js'
                                ]);
                            });
                        }]
                    }
                })
                ;
        }]);