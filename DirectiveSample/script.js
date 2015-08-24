angular.module("MyApp", [])
    .controller("MainController", function () {
        this.name = "tanaka";
        this.name2 = "yuatro";
        this.name3 = "yuatrotanaka";

        this.reverseName = function () {
            this.name = this.name.split("").reverse().join("");
        };
    })
    .directive("reverser1", function () {
        return {
            restrict: 'AE',
            require: "ngModel",
            link: function (scope, elem, attrs, ngModel) {
                elem.bind('blur', function () {
                    // FIXME only ng-model in input changed
                    ngModel.$viewValue = ngModel.$modelValue.split("").reverse().join("");
                    ngModel.$render();
                });
            }
        }
    })
    .directive("reverser2", function () {
        return {
            restrict: 'AE',
            require: "ngModel",
            link: function (scope, elem, attrs, ngModel) {
                elem.bind('blur', function () {
                    // All changed !!
                    ngModel.$setViewValue(ngModel.$modelValue.split("").reverse().join(""));
                    ngModel.$render();
                });
            }
        }
    });