/// <reference path='../_all.ts' />

module todos {
    export function todoFocus($timeout:ng.ITimeoutService):ng.IDirective {
        return {
            link: ($scope:ng.IScope, elem:JQuery, attrs:any) => {
                $scope.$watch(attrs.todoFocus, newVal => {
                    if (newVal) {
                        $timeout(() => elem[0].focus(), 0, false);
                    }
                });
            }
        }
    }

    todoFocus.$inject = ['$timeout'];
}