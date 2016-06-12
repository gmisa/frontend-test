/**
 * Created by misag on 6/8/16.
 */

(function() {
    "use strict";

    var module = angular.module("fenderApp");

    module.component("productInfo", {
        templateUrl: "product-info.component.html",
        controller: ["$routeParams", "productCatalogService", ProductInfoController],
        controllerAs: "vm"
    });


    function ProductInfoController($routeParams, productCatalogService) {
        var vm = this;

        var prodId = $routeParams.id;
        
        if (prodId) {

            var productsCatalog = productCatalogService.getProductCatalog();
            
            productsCatalog.get({id:prodId})
                .$promise
                .then(getProductSuccess);
        }

        function getProductSuccess(result) {
            vm.product = result;
        }
    }

}());