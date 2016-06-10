/**
 * Created by misag on 6/8/16.
 */

(function() {
    "use strict";

    var module = angular.module("fenderApp");

    module.component("productCatalog", {
        templateUrl: "product-catalog.component.html",
        controller: ["$scope", "productCatalogService", ProductCatalogController],
        controllerAs: "vm"
    });

    function ProductCatalogController($scope, productCatalogService) {
        var vm = this;

        var productsCatalog = productCatalogService.getProductCatalog();
        var productTypes = productCatalogService.getProductTypes();

        vm.init = function () {
            productsCatalog.get()
                .$promise
                .then(getProductsSuccess);
            
            productTypes.query()
                .$promise
                .then(getProductTypesSuccess);
        };

        function getProductsSuccess(results) {
            vm.products = results.documents;
        }


        function getProductTypesSuccess(results) {
            vm.productTypes = results;
        }
        
        vm.init();
    }

}());