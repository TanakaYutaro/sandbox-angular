angular.module('TODO', [])
    .controller('TodoController', TodoController)
    .service('todoService', TodoService)
    .filter('customFilter', CustomFilter);