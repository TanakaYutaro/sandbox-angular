# サンプルソース
- [NG-Init-Minimum](https://github.com/TanakaYutaro/AngularJSSample/releases/tag/NG-Init-Minimum "Minimum NG-INIT Code")
- [SearchForm](https://github.com/TanakaYutaro/AngularJSSample/releases/tag/FormQueryFilter "SearchForm")
- [RegistFormTemplateMinimam](https://github.com/TanakaYutaro/AngularJSSample/releases/tag/FormTemplateMin "FormTemplateMinimam")
- [TodoList](https://github.com/TanakaYutaro/AngularJSSample/releases/tag/TodoList "TodoList")

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

親コントローラ mainCtrl の user をネストしている子コントローラ userItemCtrl で使用

.html
<pre class="prettyprint linenums:0">
<div ng-controller="mainCtrl">
        <ul>
            <li ng-repeat="user in users" ng-controller="userItemCtrl">
               {{user.name | lowercase}}  {{user.score | number:3}}
                <button ng-click="increment()">+1</button>
            </li>
        </ul>
    </div>
</pre>
.js
<pre class="prettyprint linenums:0">
var mainCtrl = function($scope) {
    $scope.users = [
        {"name" : "Yutaro", "score" : 99.99},
        {"name" : "Mori", "score" : 88.99},
        {"name" : "Kobayashi", "score" : 77.99},
    ];
}
var userItemCtrl = function($scope) {
    $scope.increment = function() {
        // ファイルでネストしている場合親要素（user）が使用できる
        $scope.user.score++;
    }
}
</pre>



# フォーム

<pre class="prettyprint linenums:0">
    <div ng-controller="mainCtrl">
        <form name="myForm" ng-submit="addUser()">
            <p>Name:
                <input type="text" name="name" ng-model="user.name" required ng-minlength="5" ng-maxlength="8">
                <span ng-show="myForm.name.$error.required">Required!</span>
                <span ng-show="myForm.name.$error.minlength">Too short!</span>
                <span ng-show="myForm.name.$error.maxlength">Too long!</span>
            </p>

            <p>Score:
                <input type="number" name="score"  ng-model="user.score">
            </p>

            <p>E-mail:
                <input type="email" name="email" ng-model="user.email">
                <span ng-show="myForm.email.$error.email">Not valid email!</span>
            </p>

            <p>Web:
                <input type="url" name="url" ng-model="user.url">
                <span ng-show="myForm.url.$error.url">Not valid url!</span>
            </p>

            <p><input type="submit" value="add"></p>
        </form>
        <pre>{{user | json}}</pre>
    </div>
</pre>


# その他
- `input type="checkbox" ng-model="user.adult"` // ng-true-value="adult" ng-false-value="child"で値を変えられる
- `ng-options="color for color in colors"`      // デフォルト
- `ng-options="'label:' + color for color in colors"` // 表示にラベルを追加
- `ng-options="'label:'+color for color in ['red','blue','pink']" ng-init="user.color='red'"` // デフォルトラベルの設定

# 参考
- http://dotinstall.com/lessons/basic_angularjs
