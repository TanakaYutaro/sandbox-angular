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
- `<input type="text" ng-model="query" />` と `user in users | filter:query` // input の文字列にヒットするデータフィルタ
- `ng-model="query.name"` // で文字列のみフィルタ
