angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',

           function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $stateProvider
                .state('app.assemblies', {
                    url: "/assemblies",
                    templateUrl: "pages/operations/assemblies/assemblies.html",
                    controller: 'AssembliesCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['dataTables'], {
                                insertBefore: '#lazyload_placeholder',
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/operations/assemblies/assemblies.js',
                                    'pages/operations/assemblies/assemblies.css',
                                    'core/css/table.css',
                                    'core/css/pages_custom.css'
                                ]);
                            });
                        }]
                    }
                })
                .state('app.assemblies_builder', {
                    url: "/assemblies_builder/:id/:name",
                    templateUrl: "pages/operations/assemblies-builder/assemblies-builder.html",
                    controller: 'AssembliesBuilderCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'switchery',
                                'select',
                                'tagsInput',
                                'dropzone'   
                                ], {
                                insertBefore: '#lazyload_placeholder',
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/operations/assemblies-builder/assemblies-builder.js',
                                    'assets/lib/angular-tree-dnd/dist/ng-tree-dnd.css',
                                    'pages/operations/assemblies-builder/assemblies-builder.css'
                                ]);
                            });
                        }]
                    }
                })
                .state('app.products', {
                    url: "/products",
                    templateUrl: "pages/operations/products/products.html",
                    controller: 'ProductsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['dataTables'], {
                                insertBefore: '#lazyload_placeholder',
                            })
                            .then(function () {
                                return $ocLazyLoad.load([
                                    'pages/operations/products/products.js',
                                    'pages/operations/products/products.css',
                                    'core/css/table.css',
                                    'core/css/pages_custom.css'
                                ]);
                            });
                        }]
                    }
                })
        }]);