angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',

        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $stateProvider
                .state('app.companies', {
                    url: "/companies",
                    templateUrl: "pages/erp/companies/companies.html",
                    controller: 'CompaniesCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['dataTables'], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'pages/erp/companies/companies.js',
                                        'pages/erp/companies/companies.css',
                                        'core/css/table.css',
                                        'core/css/pages_custom.css'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.vendors', {
                    url: "/vendors",
                    templateUrl: "pages/erp/vendors/vendors.html",
                    controller: 'VendorsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['dataTables'], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function () {
                                    return $ocLazyLoad.load([
                                        'pages/erp/vendors/vendors.js',
                                        'pages/erp/vendors/vendors.css',
                                        'core/css/table.css',
                                        'core/css/pages_custom.css'
                                    ]);
                                });
                        }]
                    }
                })
        }]);