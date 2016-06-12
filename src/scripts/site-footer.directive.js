/**
 * Created by misag on 6/11/16.
 */


(function () {
    "use strict";

    var module = angular.module("fenderApp");

    module.directive("siteFooter", siteFooter);

    function siteFooter() {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            controllerAs: 'vm',
            controller: SiteFooterController,
            bindToController: true,
            templateUrl: 'site-footer.template.html',
            link: linkFn
        };
    }

    function linkFn ($scope, element, attrs, ctrl) {

    }

    SiteFooterController.$inject = [];
    function SiteFooterController() {
        var vm = this;
    }
}());