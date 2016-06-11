/**
 * Created by misag on 6/8/16.
 */

(function () {
    'use strict';
    angular
        .module('fenderApp')
        .factory('productCatalogService', ["$resource", "$filter", productCatalogService]);

    function productCatalogService ($resource, $filter) {
        return {
            getProductCatalog: function () {
                return $resource('/api/products/:id');
            },
            getProductTypes: function() {
                return $resource('/api/producttypes');
            },
            products: []
        }
    }
})();
