angular.module("testApp", ["ngRoute"], function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/foo/", {
            templateUrl: "/template/foo.html"
        })
        .when("/foo/:fooId", {
            templateUrl: "/template/foo-detail.html"
        })
        .otherwise({
            templateUrl: "/template/main.html"
        });
    $locationProvider.html5Mode(true);
})
    .controller("FooController", FooController)
    .controller("SearchController", SearchController);


function FooController($scope, $routeParams) {
    $scope.fooId = $routeParams.fooId;
}

function SearchController($scope) {
    $scope.users = [
        {
            id: 1,
            name: "空条承太郎",
            kana: "クウジョウジョウタロウ",
            note: "オラオラ"
        },
        {
            id: 3,
            name: "東方仗助",
            kana: "ヒガシカタジョウスケ",
            note: "変な髪型"
        },
        {
            id: 2,
            name: "荒木飛呂彦",
            kana: "アラキヒロヒコ",
            note: "歳を取らない"
        },
        {
            id: 4,
            name: "虹村億泰",
            kana: "ニジムラオクヤス",
            note: "東方仗助が岸辺露伴を困らせた時わたしは焼身自殺します"
        },
        {
            id: 6,
            name: "岸辺露伴",
            kana: "キシベロハン",
            note: "岸部露伴は動かない"
        },
        {
            id: 5,
            name: "広瀬康一",
            kana: "ヒロセコウイチ",
            note: "エコーズ"
        }
    ];

    $scope.search = "";

    $scope.matches = function (element) {
        var query = $scope.search;
        query = query.replace(/　/g, " ");
        var searchArr = query.split(" ");

        var elementString = JSON.stringify(element); // 一時しのぎ
        var ret = true;
        $.each(searchArr, function (index, keyword) {
            ret = ret && (keyword == "" || (elementString.search(keyword) != -1));
        });
        return ret;
    };
}
