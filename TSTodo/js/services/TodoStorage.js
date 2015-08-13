/// <reference path='../_all.ts' />
var todos;
(function (_todos) {
    'use strict';

    var TodoStorage = (function () {
        function TodoStorage() {
            this.STORAGE_ID = 'todos-ng-ts';
        }
        TodoStorage.prototype.get = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };

        TodoStorage.prototype.put = function (todos) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        };
        return TodoStorage;
    })();
    _todos.TodoStorage = TodoStorage;
})(todos || (todos = {}));
//# sourceMappingURL=TodoStorage.js.map
