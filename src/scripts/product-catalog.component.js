/**
 * Created by misag on 6/8/16.
 */

(function() {
    "use strict";

    var module = angular.module("fenderApp");

    module.component("productCatalog", {
        templateUrl: "product-catalog.component.html",
        controller: ["$scope", "$filter", "productCatalogService", ProductCatalogController],
        controllerAs: "vm"
    });


    function ProductCatalogController($scope, $filter, productCatalogService) {
        var vm = this;

        var productsCatalog = productCatalogService.getProductCatalog();
        var productTypes = productCatalogService.getProductTypes();

        vm.init = function () {
            productsCatalog.get()
                .$promise
                .then(getProductsSuccess);
        };

        function getProductsSuccess(results) {
            productCatalogService.products = results.documents;
            vm.products = productCatalogService.products;

            productTypes.query()
                .$promise
                .then(getProductTypesSuccess);
        }


        function getProductTypesSuccess(results) {
            vm.productTypes = results;
        }
        
        vm.init();
    }

}());