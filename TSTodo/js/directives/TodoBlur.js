/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    'use strict';

    function todoBlur() {
        return {
            link: function ($scope, elem, attrs) {
                elem.bind('blur', function () {
                    $scope.$apply(attrs.todoBlur);
                });
                $scope.$on('$destroy', function () {
                    elem.unbind('blur');
                });
            }
        };
    }
    todos.todoBlur = todoBlur;
})(todos || (todos = {}));
//# sourceMappingURL=TodoBlur.js.map
