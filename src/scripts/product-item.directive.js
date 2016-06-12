/**
 * Created by misag on 6/11/16.
 */


(function () {
    "use strict";

    var module = angular.module("fenderApp");

    module.directive("productItem", productItem);

    function productItem() {
        return {
            restrict: 'E',
            scope: {
                info: '=',
            },
            replace: true,
            controllerAs: 'vm',
            controller: ProductItemController,
            bindToController: true,
            templateUrl: 'product-item.template.html',
            link: linkFn
        };
    }

    function linkFn ($scope, element, attrs, ctrl) {
        angular.element('body').removeClass('product-catalog').addClass('product-info');
        angular.element('.main-content').addClass('container-fluid');
    }

    ProductItemController.$inject = ["productCatalogService"];
    function ProductItemController(productCatalogService) {
        var vm = this;
        
        
    }
}());