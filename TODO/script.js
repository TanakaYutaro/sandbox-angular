angular.module('TODO', [])
    .controller('TodoController', function () {
        var self = this;

        self.todos = [];

        self.create = function() {
            self.todos.push(self.newTodo);
            self.newTodo = '';
        }
    });