angular.module('TODO', [])
    .controller('TodoController', function () {
        var self = this;

        self.todos = [
            {title: 'システム企画', done: true},
            {title: '要件定義', done: false}
        ];

        self.create = function () {
            self.todos.push({title: self.newTodo, done: false});
            self.newTodo = '';
        };

        self.archive = function () {
            var currentTodo = self.todos;
            self.todos = [];
            angular.forEach(currentTodo, function (todo) {
                if(!todo.done) {
                    self.todos.push(todo);
                }
            });
        };
    });