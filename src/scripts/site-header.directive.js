/**
 * Created by misag on 6/11/16.
 */


(function () {
    "use strict";

    var module = angular.module("fenderApp");

    module.directive("siteHeader", siteHeader);

    function siteHeader() {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            controllerAs: 'vm',
            controller: SiteHeaderController,
            bindToController: true,
            templateUrl: 'site-header.template.html',
            link: linkFn
        };
    }

    function linkFn ($scope, element, attrs, ctrl) {

    }

    SiteHeaderController.$inject = ["productCatalogService"];
    function SiteHeaderController(productCatalogService) {
        var vm = this;
    }
}());