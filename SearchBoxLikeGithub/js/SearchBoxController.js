function SearchBoxController(searchBoxService) {
    this.users = searchBoxService.getData();
}