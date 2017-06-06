/* ============================================================
 * File: app.js
 * Configure global module dependencies. Page specific modules
 * will be loaded on demand using ocLazyLoad
 * ============================================================ */

'use strict';

angular.module('app', [
    'ui.router',
    'ui.utils',
    'angular-jwt',
    'angular-storage',
    'oc.lazyLoad',
    'ui.tree',
    'ntt.TreeDnD',
    'ngAnimate',
    'ui.bootstrap',
    'ngSanitize'
]);
 