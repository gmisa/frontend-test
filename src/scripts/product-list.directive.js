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
                products: '=',
                categories: '='
            },
            replace: true,
            controllerAs: 'vm',
            controller: ProductListController,
            bindToController: true,
            templateUrl: 'product-list.template.html',
            link: linkFn
        };
    }

    function linkFn ($scope, element, attrs, ctrl) {}

    ProductListController.$inject = ["$scope", "$filter", "productCatalogService"];
    function ProductListController($scope, $filter, productCatalogService) {
        var vm = this;

        //refresh the product catalog view on change of filter
        $scope.$watch('vm.products', function(newValue, oldValue) {
            if (newValue) {
                vm.filteredProducts = newValue; 
            }
        });
    }
}());