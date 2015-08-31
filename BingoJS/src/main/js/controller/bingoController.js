function BingoController($scope, bingoService) {
    this.$scope = $scope;

    var numbers  = bingoService.createNumbers();
    var shuffledNumbers = bingoService.shuffle(numbers);
    $scope.shuffledNumbers = shuffledNumbers;

    var pickedNumbers = [];
    $scope.pickedNumbers = pickedNumbers;

    $scope.pickNumber = function() {
        var pickedNumber = bingoService.pickNumber(shuffledNumbers);
        $scope.pickedNumber = pickedNumber;
        pickedNumbers.push(pickedNumber);
    };
}