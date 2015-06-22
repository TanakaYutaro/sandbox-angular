function CustomFilter(todoService) {
    return function (list, searchQuery) {
        if (searchQuery) {
            var query = searchQuery.replace(/　/g, " ");
        }

        if (query) {
            var queryWordArray = query.split(" ");
            var filteredList = [];

            list.forEach(function (obj) {
                var isMatch = !queryWordArray.some(function (keyword) {
                    return !todoService.keywordJudge(obj, keyword);
                });

                if (isMatch) {
                    filteredList.push(obj);
                }
            });
            return filteredList;
        }
        return list;
    };
}