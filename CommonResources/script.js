angular.module("MyApp", ["ngResource"])
    .factory('User', function ($resource) {
        return {
            'getDetails': function (successCallback, errorCallback) {
                $resource('http://www.mocky.io/v2/557824cd316006411332c4f1').get()
                    .$promise.then(successCallback, errorCallback);
            }
        };
    })
    .controller("MainController", function (User) {
        var self = this;

        User.getDetails(function (result) {
            self.hoge = result.name;
            console.log("success");
        }, function () {
            console.log("error");
        });
    });