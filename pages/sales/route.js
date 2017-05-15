angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',

           function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $stateProvider
                .state('app.customers', {
                    url: "/customers/",
                    templateUrl: "pages/sales/customers/customers_sales.html",
                    controller: 'CustomerSalesCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['dataTables'], {
                                insertBefore: '#lazyload_placeholder',
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/sales/customers/customers_sales.js',
                                    'pages/sales/customers/customers_sales.css',
                                     'core/css/table.css'
                                ]);
                            });
                        }]
                    }
                })
                // .state('app.customers.view', {
                //     url: "/customers_view",
                //     templateUrl: "pages/customers/view/customers_view.html",
                //     controller: 'CustomersViewCtrl',
                //     resolve: {
                //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                //             return $ocLazyLoad.load([], {
                //                 insertBefore: '#lazyload_placeholder'
                //             })
                //             .then(function () {
                //                 return $ocLazyLoad.load([
                //                     'pages/customers/view/customers_view.js'
                //                 ]);
                //             });
                //         }]
                //     }
                // })
                // ;
        }]);