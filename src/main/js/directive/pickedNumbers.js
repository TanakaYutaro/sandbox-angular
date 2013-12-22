function PickedNumbers() {
    return {
        restrict: 'E',
        compile: function (element, attrs) {

            var pickedNumber = parseInt(attrs.num);

            if (1 <= pickedNumber && pickedNumber <= 9) {
                element.addClass('badge');
            } else if (10 <= pickedNumber && pickedNumber <= 19) {
                element.addClass('badge badge-success');
            } else if (20 <= pickedNumber && pickedNumber <= 29) {
                element.addClass('badge badge-warning');
            } else if (30 <= pickedNumber && pickedNumber <= 39) {
                element.addClass('badge badge-important');
            } else if (40 <= pickedNumber && pickedNumber <= 49) {
                element.addClass('badge badge-info');
            } else if (50 <= pickedNumber && pickedNumber <= 59) {
                element.addClass('badge badge-inverse');
            } else if (60 <= pickedNumber && pickedNumber <= 69) {
                element.addClass('badge');
            } else if (70 <= pickedNumber && pickedNumber <= 75) {
                element.addClass('badge');
            } else {
                element.addClass('badge badge-inverse');
            }
        }
    }
}