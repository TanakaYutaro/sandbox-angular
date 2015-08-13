/// <reference path='../_all.ts' />

module todos {
    'use strict';

    export function todoBlur():ng.IDirective {
        return {
            link: ($scope:ng.IScope, elem:JQuery, attrs:any) => {
                elem.bind('blur', () => {
                    $scope.$apply(attrs.todoBlur);
                });
                $scope.$on('$destroy', () => {
                    elem.unbind('blur');
                });
            }
        }
    }
}