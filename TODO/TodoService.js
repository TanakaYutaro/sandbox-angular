function TodoService() {
}

TodoService.prototype.keywordJudge = function (obj, keyword) {
    var self = this;

    if (angular.isArray(obj)) {
        return obj.some(function (child) {
            return self.keywordJudge(child, keyword);
        });
    } else if (angular.isObject(obj)) {
        var properties = Object.getOwnPropertyNames(obj);
        return properties.some(function (property) {
            var child = obj[property];
            return self.keywordJudge(child, keyword);
        });
    } else if (obj != null) {
        return angular.toJson(obj).search(keyword) != -1;
    }
    return false;
};