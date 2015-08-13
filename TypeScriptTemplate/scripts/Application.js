/// <reference path='../_all.ts' />
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
/// <reference path='_all.ts' />
var tsForm;
(function (tsForm_1) {
    'use strict';
    var tsForm = angular.module('tsForm', [])
        .controller('MainController', tsForm_1.MainController);
})(tsForm || (tsForm = {}));
/// <reference path='../typings/jquery/jquery.d.ts' />
/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path="./interfaces/IMainControllerScope.ts" />
/// <reference path="./controllers/MainController.ts" />
/// <reference path="./Application.ts" /> 
//# sourceMappingURL=Application.js.map