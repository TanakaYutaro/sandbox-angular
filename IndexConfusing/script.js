angular.module("MyApp", [])
    .controller("MainController", function () {
        var self = this;

        self.data = ["A", "B", "C"];
        self.newData = '';

        self.addData = function () {
            self.data.unshift(self.newData);
            self.newData = '';
        };

        self.data2 = [
            {text: "A"},
            {text: "B"},
            {text: "C"}
        ];
        self.newData2 = '';

        self.addData2 = function () {
            self.data.unshift({text: self.newData2});
            self.newData2 = '';
        };
    });