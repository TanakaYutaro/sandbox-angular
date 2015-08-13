/// <reference path='../_all.ts' />
var tsForm;
(function (tsForm) {
    'use strict';
    var MainController = (function () {
        function MainController($scope) {
            this.$scope = $scope;
            $scope.hoge = 'ほげ';
        }
        MainController.$inject = [
            '$scope'
        ];
        return MainController;
    })();
    tsForm.MainController = MainController;
})(tsForm || (tsForm = {}));
//# sourceMappingURL=MainController.js.map