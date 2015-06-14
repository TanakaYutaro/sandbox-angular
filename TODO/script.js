angular.module('TODO', [])
    .controller('TodoController', function () {
        var self = this;

        self.todos = [
            {title: 'システム企画', done: true},
            {title: '要件定義', done: false}
        ];

        self.create = function() {
            var todo = {
                title: self.newTodo,
                done: false
            };
            self.todos.push(todo);
            self.newTodo = '';
        };
    });