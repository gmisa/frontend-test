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
            getProductCatalog: function () {
                return $resource('/api/products/:id');
            },
            getProductTypes: function() {
                return $resource('/api/producttypes');
            }
        }
    }
})();
