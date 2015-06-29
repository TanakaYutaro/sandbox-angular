angular.module("MyApp", [])
    .controller("MyController", function () {
        this.patterns = {
            mail: {
                regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'メールアドレス形式が不正です。'
            }
        };
    })
    .directive('myInput', function () {
        return {
            restrict: 'E',
            require: '^form',
            replace: true,
            scope: {
                title: '@',
                name: '@',
                placeholder: '@',
                ngModel: '=',
                required: '=',
                validation: '='
            },
            link: function (scope, element, attrs, controller) {
                var target = controller[attrs.name];

                scope.isError = function () {
                    return target.$dirty && target.$invalid;
                };

                scope.isRequiredError = function () {
                    return target.$error.required;
                };

                scope.isInvalidError = function () {
                    return !scope.isRequiredError()
                        && target.$invalid
                        && scope.validation.message;
                };
            },
            templateUrl: "template/template.html"
        };
    });