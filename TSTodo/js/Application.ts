/// <reference path='_all.ts' />

module todos {
    'use strict';

    var todomvc = angular.module('todomvc', [])
        .controller('todoController', TodoController)
        .directive('todoBlur', todoBlur)
        .directive('todoFocus', todoFocus)
        .service('todoStorage', TodoStorage);
}