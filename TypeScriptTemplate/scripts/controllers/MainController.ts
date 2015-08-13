/// <reference path='../_all.ts' />

module tsForm {
    'use strict';

    export class MainController {
        public static $inject = [
            '$scope'
        ];

        constructor(private $scope:IMainControllerScope) {
            $scope.hoge = 'ほげ';
        }
    }
}