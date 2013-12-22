function PickedNumbers() {
    return {
        restrict: 'E',
        compile: function (element, attrs) {

            var pickedNumber = parseInt(attrs.num);

            if (1 <= pickedNumber && pickedNumber <= 9) {
                element.addClass('cube-gray');
            } else if (10 <= pickedNumber && pickedNumber <= 19) {
                element.addClass('cube-red');
            } else if (20 <= pickedNumber && pickedNumber <= 29) {
                element.addClass('cube-blue');
            } else if (30 <= pickedNumber && pickedNumber <= 39) {
                element.addClass('cube-green');
            } else if (40 <= pickedNumber && pickedNumber <= 49) {
                element.addClass('cube-yellow');
            } else if (50 <= pickedNumber && pickedNumber <= 59) {
                element.addClass('cube-black');
            } else if (60 <= pickedNumber && pickedNumber <= 69) {
                element.addClass('cube');
            } else if (70 <= pickedNumber && pickedNumber <= 75) {
                element.addClass('cube');
            } else {
                element.addClass('cube2');
            }
        }
    }
}