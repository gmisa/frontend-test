/**
 * Created by misag on 6/8/16.
 */

(function () {
    'use strict';
    angular
        .module('fenderApp')
        .factory('productCatalogService', ["$resource", productCatalogService]);

    function productCatalogService ($resource) {
        return {
            productsApi: function () {
                return $resource('/api/:id');
            }
        }
    }
})();
