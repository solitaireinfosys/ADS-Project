angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',

           function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $stateProvider
                .state('app.customers', {
                    url: "/customers",
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
                .state('app.orders', {
                    url: "/orders",
                    templateUrl: "pages/sales/orders/orders.html",
                    controller: 'OrdersCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['dataTables'], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/sales/orders/orders.js',
                                    'pages/sales/orders/orders.css',
                                    'core/css/table.css'
                                ]);
                            });
                        }]
                    }
                })
                .state('app.createorders', {
                    url: "/createorders",
                    templateUrl: "pages/sales/createorders/createorders.html",
                    controller: 'CreateOrdersCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'switchery',
                                'select',
                                'tagsInput',
                                'dropzone' ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/sales/createorders/createorders.js',
                                    'pages/sales/createorders/createorders.css',
                                    'assets/lib/angular-tree-dnd/dist/ng-tree-dnd.css'
                                ]);
                            });
                        }]
                    }
                })
                .state('app.invoice', {
                    url: "/invoice",
                    templateUrl: "pages/sales/invoice/invoice.html",
                    controller: 'InvoiceCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/sales/invoice/invoice.js',
                                    'pages/sales/invoice/invoice.css',
                                ]);
                            });
                        }]
                    }
                })
        }]);