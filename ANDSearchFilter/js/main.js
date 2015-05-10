angular.module("ANDSearchFilterApp", [])
    .service("andSearchService", ANDSearchService)
    .filter("andSearchFilter", ANDSearchFilter)
    .controller("ANDSearchController", ANDSearchController);