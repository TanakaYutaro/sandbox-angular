angular.module("dragAndDropable", ['ngRepeatReorder'])
    .controller("MainController", function () {
        this.targets = [
            {val: 'A'},
            {val: 'B'},
            {val: 'C'},
            {val: 'D'},
            {val: 'E'}
        ];
        this.tempTarget = '';
        this.updateTargets = function () {
            if (this.tempTarget === "") return
            this.targets.push({val: this.tempTarget});
            this.tempTarget = "";
        };
        this.checkForNameDelete = function ($index) {
            if (this.targets[$index].val === '') {
                this.targets.splice($index, 1);
            }
        }
    });