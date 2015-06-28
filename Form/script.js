angular.module("MyApp", [])
    .controller("MainController", function () {
        this.patterns = {
            zipCode: {
                regexp: /^[0-9]{7}$/,
                msg: 'ハイフンなしの7桁の数字で入力してください',
                maxlength: 7
            },
            phone: {
                regexp: /^[0-9]{10,11}$/,
                msg: 'ハイフンなしの半角数字を10〜11桁で入力してください',
                maxlength: 11
            },
            mail: {
                regexp: /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                msg: 'メールアドレス形式が不正です。'
            }
        };
    })
    .directive('myInput', function () {
        return {
            restrict: 'A',
            require: ['^?form'],
            transclude: true,
            replace: true,
            scope: {
                title: '@',
                id: '@',
                ngModel: '=',
                ngRequired: '=',
                validation: '=',
                placeholder: '@?',
                errMsg: '=?'
            },
            controller: ['$scope', function ($scope) {
                if (!$scope.errMsg) {
                    $scope.errMsg = {};
                }
                if ($scope.ngRequired === true && !('required' in $scope.errMsg)) {
                    $scope.errMsg.required = $scope.title + 'を入力して下さい';
                }
                if ($scope.validation && !('invalid' in $scope.errMsg)) {
                    $scope.errMsg.invalid = $scope.validation.msg;
                }
            }],
            link: function (scope, element, attrs, ctrl) {
                scope.target = ctrl[0][attrs.id];
            },
            templateUrl: "template/template.html"
        };
    });