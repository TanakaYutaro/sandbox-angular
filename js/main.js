angular.module("testApp", ["ngRoute"], function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/foo/", {
            templateUrl: "/template/foo.html"
        })
        .when("/foo/:fooId", {
            templateUrl: "/template/foo-detail.html",
            controller: "fooController"
        })
        .otherwise({
            templateUrl: "/template/main.html"
        });
    $locationProvider.html5Mode(true);
});

function topController($scope) {
    $scope.username = "vatscy";
}

function fooController($scope, $routeParams) {
    $scope.fooId = $routeParams.fooId;
}
