angular.module("BingoJS", ["ngRoute"], function ($routeProvider, $locationProvider) {
        var serviceName = "er";
        $routeProvider
            .when("/" + serviceName + "/", {
                templateUrl: "/template/index.html"
            })
            .when("/" + serviceName + "/about", {
                templateUrl: "/template/about.html"
            })
            .otherwise({
                templateUrl: "/template/index.html"
            });
        $locationProvider.html5Mode(true);
    }
)
    .value("maxNumber", 75)
    .directive("picked", PickedNumbers)
    .service("bingoService", BingoService)
    .controller("BingoController", BingoController);
