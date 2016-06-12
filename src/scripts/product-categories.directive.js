/**
 * Created by misag on 6/10/16.
 */

(function () {
    "use strict";

    var module = angular.module("fenderApp");

    module.directive("productCategories", productCategories);

    productCategories.$inject = ["_", "productCatalogService"];
    function productCategories(_, productCatalogService) {
        return {
            restrict: 'E',
            scope: {
                categories: '=',
                products: '='
            },
            replace: true,
            controllerAs: 'vm',
            controller: ProductCategoriesController,
            bindToController: true,
            templateUrl: 'product-categories.template.html',
            link: linkFn
        };

        function linkFn(scope, element, attrs, ctrl) {}
    }

    ProductCategoriesController.$inject = ["_", "productCatalogService", "$filter"];
    function ProductCategoriesController(_, productCatalogService, $filter) {
        var vm = this;
        
        vm.toggleFilter = toggleFilter;

        function toggleFilter(parentId, childId) {

            var cat = _.find(vm.categories, function (o) {
                return o.prodTypeId === parentId;
            });

            if (cat) {
                if (!childId) { //Only prodType was checked
                    _.each(cat.seriesInfo, function (s) {
                        s.selected = cat.selected;  //check/uncheck all subtypes
                    });
                }
                else {
                    var subCatCount = cat.seriesInfo.length;

                    var subCatChecked = _.filter(cat.seriesInfo, function(s) {
                        return s.selected === true;
                    });

                    cat.selected = subCatChecked.length === 0 ? false : true;
                }
            }
            
            vm.products = $filter('productFilter')(productCatalogService.products, vm.categories);
        }
    }
}());