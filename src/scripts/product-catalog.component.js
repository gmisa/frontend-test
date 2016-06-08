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

        var productsApi = productCatalogService.productsApi();

        vm.init = function () {
            productsApi.get()
                .$promise
                .then(getProductsSuccess);
        };

        function getProductsSuccess(results) {
            vm.products = results.documents;
        }

        vm.init();
    }

}());