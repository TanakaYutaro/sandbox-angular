var Main;
(function (Main){
    Main.appName = "ng-test";

    angular.module(Main.appName, [Main.appName + ".service"], function () {

    });

    angular.module(Main.appName + ".service", [], function() {
    }).factory("sampleService", function ($http){
            return new Service.SampleService($http);
        });

})(Main || (Main = {}));