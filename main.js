/**
 * Created with JetBrains WebStorm.
 * User: tanaka_yut
 * Date: 13/10/24
 * Time: 16:56
 * To change this template use File | Settings | File Templates.
 */
function Controller($scope) {
    $scope.text = "Hello world!";
    $scope.userList = [
        "tanaka",
        "baba",
        "mori"
    ];
    $scope.catList = [
        { kind : "ノルウェーなんとかキャット", spec : "興味ない"},
        { kind : "ロシアンブル", spec : "好き"}
    ]
    $scope.add = function () {
        $scope.userList.push($scope.text);
    }
}