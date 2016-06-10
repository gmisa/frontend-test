/**
 * Created by misag on 6/10/16.
 */


(function () {
    "use strict";

    var module = angular.module("fenderApp");

    module.directive("productList", productList);

    function productList() {
        return {
            restrict: 'E',
            scope: {
                products: '='
            },
            replace: true,
            controllerAs: 'vm',
            controller: ProductListController,
            bindToController: true,
            templateUrl: 'product-list.template.html',
            link: linkFn
        };
    }

    function linkFn (scope, element, attrs, ctrl) {

    }

    function ProductListController() {
        var vm = this;

    }

}());