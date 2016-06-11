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
            var product = _.find(productCatalogService.products, function(item) {
                return item.productNo === prodId;
            });
            
            if (product) {
                vm.product = product;
            }
        }
    }

}());