/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';

    var todomvc = angular.module('todomvc', []).controller('todoController', todos.TodoController).directive('todoBlur', todos.todoBlur).directive('todoFocus', todos.todoFocus).service('todoStorage', todos.TodoStorage);
})(todos || (todos = {}));
//# sourceMappingURL=Application.js.map
