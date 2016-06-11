/**
 * Created by misag on 6/7/16.
 */

(function () {
    'use strict';

    angular.module('fenderApp', [
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'ui.bootstrap'
    ])
    .constant('_', window._)
    .filter('productFilter', productFilter);

    productFilter.$inject = ["_", "productCatalogService"];

    function productFilter (_, productCatalogService) {
        return function(products, categories) {
            var filteredProducts = [];

            if (products && categories) {
                _.each(categories, function(productType) {
                    if (productType.selected) {

                        _.each(productType.subTypes, function(subProduct) {
                            _.each(products, function(product) {
                                if (product.prodSubTypeId === subProduct.prodSubTypeId && subProduct.selected) {
                                    filteredProducts.push(product);
                                }
                            });
                        });
                    }
                });
            }

            return filteredProducts;
        }
    }
})();