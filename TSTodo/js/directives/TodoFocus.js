/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    function todoFocus($timeout) {
        return {
            link: function ($scope, elem, attrs) {
                $scope.$watch(attrs.todoFocus, function (newVal) {
                    if (newVal) {
                        $timeout(function () {
                            return elem[0].focus();
                        }, 0, false);
                    }
                });
            }
        };
    }
    todos.todoFocus = todoFocus;

    todoFocus.$inject = ['$timeout'];
})(todos || (todos = {}));
//# sourceMappingURL=TodoFocus.js.map
