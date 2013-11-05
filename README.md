# ng タグ
- `ng-controller="<controller_name>"`
- `ng-repeat="<任意> in <$scope.の後>"`
- `user in users | limitTo:5` // 表示数の制限
- `user in users | orderBy:'score'` // 昇順ソート
- `user in users | orderBy:'-score'` // 降順ソート
- `user in users | orderBy:'-score' | limitTo:3` // TOP3のみ

# フィルタ
- `{{25 * 100 | number}}` // 数字（カンマを自動追加）
- `{{25 * 100 | currency}}` // 通貨（$を自動追加）
- `{{25 * 100 | currency:"¥"}}` // ""内の文字をラベル化する
- `{{today | date:'yyyy-MM-dd / hh:mm:ss'}}` // 日付のフォーマット指定（$scope.today = new Date();）

# 繰り返しのフィルタ
- `<input type="text" ng-model="query" />` と `user in users | filter:query` // input の文字列にヒットするデータフィルタ
- `ng-model="query.name"` // で文字列のみフィルタ
- `{{$index}}` // 要素インデックスの付加
- `<li ng-repeat="user in users" ng-class-even="'even'" ng-class-odd="'odd'">` // 偶奇によって class プロパティを変更

# ng-controller のネスト

<pre class=“prettyprint linenums:0”>
<div ng-controller="mainCtrl">
        <ul>
            <li ng-repeat="user in users" ng-controller="userItemCtrl">
               {{user.name | lowercase}}  {{user.score | number:3}}
                <button ng-click="increment()">+1</button>
            </li>
        </ul>
    </div>
</pre>

<pre class="prettyprint linenums:0>
var mainCtrl = function($scope) {
    $scope.users = [
        {"name" : "Yutaro", "score" : 99.99},
        {"name" : "Mori", "score" : 88.99},
        {"name" : "Kobayashi", "score" : 77.99},
        {"name":"hayashi", "score":5.25},
        {"name":"tanahashi", "score":82.4},
        {"name":"yasuda", "score":55.21},
        {"name":"minami", "score":32.8},
        {"name":"yanagi", "score":72.2}
    ];
}


var userItemCtrl = function($scope) {
    $scope.increment = function() {
        // ファイルでネストしている場合親要素（user）が使用できる
        $scope.user.score++;
    }
}
</pre>
