angular.module("MyApp", [])
    .controller("MyController", function () {
        this.patterns = {
            mail: {
                regexp: /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                message: 'メールアドレス形式が不正です。'
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
                name: '@',
                placeholder: '@',
                ngModel: '=',
                required: '=',
                validation: '='
            },
            link: function (scope, element, attrs, controllers) {
                var target = controllers[0][attrs.name];

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