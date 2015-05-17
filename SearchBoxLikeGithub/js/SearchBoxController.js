function SearchBoxController($timeout, searchBoxService) {
    var self = this;

    self.$timeout = $timeout;
    self.users = searchBoxService.getData();

    self.keyword = {
        id: '',
        name: '',
        kana: '',
        note: '',
        $: ''
    };

    self.filterLabel = {
        id: 'ID',
        name: '氏名',
        kana: 'フリガナ',
        note: '備考',
        $: 'ALL'
    };
}

SearchBoxController.prototype.switchFilter = function (target) {
    this.filter = target;
    for (var k in self.keyword) {
        this.keyword[k] = '';
    }
};