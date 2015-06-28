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
            controller: function ($scope) {
                $scope.isError = function (target) {
                    return target.$dirty && target.$invalid;
                };

                $scope.isRequiredError = function (target) {
                    return target.$error.required;
                };

                $scope.isInvalidError = function (target) {
                    return !$scope.isRequiredError(target)
                        && target.$invalid
                        && $scope.validation.message;
                };
            },
            link: function (scope, element, attrs, ctrl) {
                scope.target = ctrl[0][attrs.name];
            },
            templateUrl: "template/template.html"
        };
    });