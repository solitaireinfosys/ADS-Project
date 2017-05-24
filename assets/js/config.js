/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */

angular.module('app')
    .config(['jwtOptionsProvider', '$httpProvider', 'SETTINGS',
        function(jwtOptionsProvider, $httpProvider, SETTINGS) {
            $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';

            jwtOptionsProvider.config({
                whiteListedDomains: [
                    "ec2-54-193-113-199.us-west-1.compute.amazonaws.com",
                    "ec2-54-183-115-168.us-west-1.compute.amazonaws.com"
                ],
                tokenGetter: function() {
                    // token is "token"
                    var token = localStorage.getItem(SETTINGS.JWT.name);
                    if (token) {
                        // console.log(token.substring(1, token.length-1));
                        return token.substring(1, token.length-1);
                    }
                    return null;
                }
            });

        $httpProvider.interceptors.push('jwtInterceptor');

        $httpProvider.interceptors.push(function() {
            return {
                'request': function(request) {
                    request.headers['Content-Type'] = 'application/json';
                    return request;
                },
                'response': function(response) {
                    return response;
                },
                'requestError': function(response) {
                    return response;
                },
                'responseError': function(response) {
                    return response;
                }
            };
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/auth/login');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: "/app",
                    templateUrl: "pages/app/app.html"
                })
                .state('app.dashboard', {
                    url: "/dashboard",
                    templateUrl: "pages/dashboard/dashboard.html",
                    controller: 'DashboardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'nvd3',
                                'mapplic',
                                'rickshaw',
                                'metrojs',
                                'sparkline',
                                'skycons',
                                'switchery'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/dashboard/dashboard.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.table', {
                    url: "/table",
                    templateUrl: "pages/table/table.html",
                    controller: 'DataTableCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'dataTables'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/table/table.js',
                                    ]);
                                });
                        }]
                    }
                })
                // calendar
                .state('app.calendar', {
                    url: "/calendar",
                    templateUrl: "pages/calendar/calendar.html",
                    controller: 'CalendarCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/calendar/calendar.js'
                                    ]);
                                });
                        }]
                    }
                })

                // marketing
                .state('app.marketing_dashboard', {
                    url: "/marketing_dashboard",
                    templateUrl: "pages/marketing_dashboard/marketing_dashboard.html",
                    controller: 'MarketingDashboardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/marketing_dashboard/marketing_dashboard.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.targeting', {
                    url: "/targeting",
                    templateUrl: "pages/targeting/targeting.html",
                    controller: 'TargetingCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/targeting/targeting.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.demographics', {
                    url: "/demographics",
                    templateUrl: "pages/demographics/demographics.html",
                    controller: 'DemographicsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/demographics/demographics.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.cohorts', {
                    url: "/cohorts",
                    templateUrl: "pages/cohorts/cohorts.html",
                    controller: 'CohortsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/cohorts/cohorts.js'
                                    ]);
                                });
                        }]
                    }
                })

                // crm
                .state('app.crm_dashboard', {
                    url: "/crm_dashboard",
                    templateUrl: "pages/crm_dashboard/crm_dashboard.html",
                    controller: 'CrmDashboardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/crm_dashboard/crm_dashboard.js'
                                    ]);
                                });
                        }]
                    }
                })
                //
                .state('app.our_customers', {
                    url: "/our_customers",
                    templateUrl: "pages/our_customers/our_customers.html",
                    controller: 'OurCustomersCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_customers/our_customers.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_opportunities', {
                    url: "/our_opportunities",
                    templateUrl: "pages/our_opportunities/our_opportunities.html",
                    controller: 'OurOpportunitiesCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_opportunities/our_opportunities.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_contracts', {
                    url: "/our_contracts",
                    templateUrl: "pages/our_contracts/our_contracts.html",
                    controller: 'OurContractsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_contracts/our_contracts.js'
                                    ]);
                                });
                        }]
                    }
                })

                // production
                .state('app.production_dashboard', {
                    url: "/production_dashboard",
                    templateUrl: "pages/production_dashboard/production_dashboard.html",
                    controller: 'ProductionDashboardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/production_dashboard/production_dashboard.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.schedule_live', {
                    url: "/schedule_live",
                    templateUrl: "pages/schedule_live/schedule_live.html",
                    controller: 'ScheduleLiveCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/schedule_live/schedule_live.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.work_in_progress', {
                    url: "/work_in_progress",
                    templateUrl: "pages/work_in_progress/work_in_progress.html",
                    controller: 'WorkInProgressCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/work_in_progress/work_in_progress.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_lines', {
                    url: "/our_lines",
                    templateUrl: "pages/our_lines/our_lines.html",
                    controller: 'OurLinesCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_lines/our_lines.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_equipment', {
                    url: "/our_equipment",
                    templateUrl: "pages/our_equipment/our_equipment.html",
                    controller: 'OurEquipmentCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_equipment/our_equipment.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_plans', {
                    url: "/our_plans",
                    templateUrl: "pages/our_plans/our_plans.html",
                    controller: 'OurPlansCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_plans/our_plans.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_work_orders', {
                    url: "/our_work_orders",
                    templateUrl: "pages/our_work_orders/our_work_orders.html",
                    controller: 'OurWorkOrdersCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_work_orders/our_work_orders.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.kan_ban', {
                    url: "/kan_ban",
                    templateUrl: "pages/kan_ban/kan_ban.html",
                    controller: 'KanBanCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/kan_ban/kan_ban.js'
                                    ]);
                                });
                        }]
                    }
                })

                // materials
                .state('app.materials_dashboard', {
                    url: "/materials_dashboard",
                    templateUrl: "pages/materials_dashboard/materials_dashboard.html",
                    controller: 'MaterialsDashboardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/materials_dashboard/materials_dashboard.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.materials_training', {
                    url: "/materials_training",
                    templateUrl: "pages/materials_training/materials_training.html",
                    controller: 'MaterialsTrainingCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'dataTables'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/materials_training/materials_training.js',
                                        'pages/materials_training/materials_training.css',
                                        'core/css/table.css'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.bill_of_materials', {
                    url: "/bill_of_materials",
                    templateUrl: "pages/bill_of_materials/bill_of_materials.html",
                    controller: 'BillOfMaterialsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'dataTables',
                                'tagsInput',
                                'switchery',
                                'select'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/bill_of_materials/bill_of_materials.js',
                                        'pages/bill_of_materials/bill_of_materials.css',
                                        'core/css/table.css'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.bill_of_materials_view', {
                    url: "/bill_of_materials/view/:programID",
                    templateUrl: "pages/bill_of_materials/view/bill_of_materials_view.html",
                    controller: 'BillOfMaterialsViewCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'assets/lib/webix/spreadsheet/codebase/webix/webix.js',
                                // 'assets/lib/webix/webix/angular-webix.js',
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/bill_of_materials/view/bill_of_materials_view.css',
                                        'assets/lib/webix/spreadsheet/codebase/spreadsheet.css',
                                        'assets/lib/webix/spreadsheet/codebase/webix/webix.css',
                                        'assets/lib/webix/spreadsheet/codebase/spreadsheet.js',
                                        'pages/bill_of_materials/view/bill_of_materials_view.js',
                                        'core/css/table.css'
                                    ]);
                                });
                        }]
                    }
                })

                // human_resources
                .state('app.our_people', {
                    url: "/our_people",
                    templateUrl: "pages/our_people/our_people.html",
                    controller: 'OurPeopleCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_people/our_people.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_skills', {
                    url: "/our_skills",
                    templateUrl: "pages/our_skills/our_skills.html",
                    controller: 'OurSkillsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_skills/our_skills.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_cip', {
                    url: "/our_cip",
                    templateUrl: "pages/our_cip/our_cip.html",
                    controller: 'OurCipCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_cip/our_cip.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_organization_matrix', {
                    url: "/our_organization_matrix",
                    templateUrl: "pages/our_organization_matrix/our_organization_matrix.html",
                    controller: 'OurOrganizationMatrixCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_organization_matrix/our_organization_matrix.js'
                                    ]);
                                });
                        }]
                    }
                })
                .state('app.our_organization', {
                    url: "/our_organization",
                    templateUrl: "pages/our_organization/our_organization.html",
                    controller: 'OurPeopleCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_organization/our_organization.js'
                                    ]);
                                });
                        }]
                    }
                })

                // site_settings
                .state('app.site_settings', {
                    url: "/site_settings",
                    templateUrl: "pages/site_settings/site_settings.html",
                    controller: 'SiteSettingsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/site_settings/site_settings.js'
                                    ]);
                                });
                        }]
                    }
                })

                // configuration
                .state('app.our_shifts', {
                    url: "/our_shifts",
                    templateUrl: "pages/our_shifts/our_shifts.html",
                    controller: 'OurShiftsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_shifts/our_shifts.js'
                                    ]);
                                });
                        }]
                    }
                })
                // generated
                .state('app.our_locations', {
                    url: "/our_locations",
                    templateUrl: "pages/our_locations/our_locations.html",
                    controller: 'OurLocationsCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'dataTables'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/our_locations/our_locations.js',
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.all_companies', {
                    url: "/all_companies",
                    templateUrl: "pages/all_companies/all_companies.html",
                    controller: 'AllCompaniesCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'dataTables'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/all_companies/all_companies.js',
                                    ]);
                                });
                        }]
                    }
                })
                // end generated

                .state('auth', {
                    url: '/auth',
                    data:{
                        requiresLogin: false
                    },
                    template: '<div class="full-height" ui-view></div>'
                })
                .state('auth.login', {
                    url: '/login',
                    controller: 'LoginCtrl',
                    templateUrl: 'pages/login/login.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                //
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/login/login.js',
                                    ]);
                                });
                        }]
                    }
                })
                .state('auth.lock_screen', {
                    url: '/lock_screen',
                    controller: 'LockScreenCtrl',
                    templateUrl: 'pages/lock_screen/lock_screen.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                //
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'pages/lock_screen/lock_screen.js',
                                    ]);
                                });
                        }]
                    }
                })
                ;

        }
    ]);