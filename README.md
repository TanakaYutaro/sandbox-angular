# ng タグ
`ng-controller="<controller_name>"`
`ng-repeat="<任意> in <$scope.の後>"`

# フィルタ
- `{{25 * 100 | number}}` // 数字（カンマを自動追加）
- `{{25 * 100 | currency}}` // 通貨（$を自動追加）
- `{{25 * 100 | currency:"¥"}}` // ""内の文字をラベル化する
- `{{today | date:'yyyy-MM-dd / hh:mm:ss'}}` // 日付のフォーマット指定（$scope.today = new Date();）
