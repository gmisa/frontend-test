/**
 * Created by misag on 6/7/16.
 */

(function () {
    'use strict';
    angular
        .module('fenderApp')
        .config(['$routeProvider', '$locationProvider', fenderRouteConfig]);

    function fenderRouteConfig ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<product-catalog></product-catalog>'
            })
            .when('/products/:id', {
                template: '<product-info></product-info>'
            })
        .otherwise({ redirectTo: '/' });
           

        $locationProvider.html5Mode(true);
    }
})();