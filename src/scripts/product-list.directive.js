/**
 * Created by misag on 6/10/16.
 */


(function () {
    "use strict";

    var module = angular.module("fenderApp");

    module.directive("productList", productList);

    productList.$inject = ['$timeout'];
    function productList($timeout) {
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

        function linkFn ($scope, element, attrs, ctrl) {
            angular.element('body').addClass('product-catalog');

            //refresh the product catalog view on change of filter
            $scope.$watch('vm.products', function(newValue, oldValue) {
                if (newValue) {
                    ctrl.filteredProducts = newValue;
                    $timeout(function () {
                        var height = element.height();
                        angular.element('.navmenu-fixed-left').height(height);
                    });

                }
            });
        }
    }

    ProductListController.$inject = [];
    function ProductListController() {
        var vm = this;
        vm.filteredProducts = vm.products;
    }
}());