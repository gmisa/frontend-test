/**
 * Created by misag on 6/10/16.
 */

(function () {
    "use strict";

    var module = angular.module("fenderApp");

    module.directive("productCategories", productCategories);

    function productCategories() {
        return {
            restrict: 'E',
            scope: {
                categories: '='
            },
            replace: true,
            controllerAs: 'vm',
            controller: ProductCategoriesController,
            bindToController: true,
            templateUrl: 'product-categories.template.html',
            link: linkFn
        };
    }

    function linkFn (scope, element, attrs, ctrl) {

    }

    ProductCategoriesController.$inject = ["productCatalogService"];
    function ProductCategoriesController(productCatalogService) {
        var vm = this;

    }

}());