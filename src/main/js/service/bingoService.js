/**
 * ビンゴゲームのServiceのコンストラクタ
 * @param maxNumber ビンゴゲームの最大番号
 * @constructor
 */
function BingoService(maxNumber) {
    this.maxNumber = maxNumber;
}

/**
 * ビンゴゲームの番号配列を作成する
 * @returns {Array}
 */
BingoService.prototype.createNumbers = function () {
    var numbers = [];

    for (var i = 0; i < this.maxNumber; i++) {
        numbers[i] = i + 1;
    }

    return numbers;
};

/**
 * 配列をシャッフルする
 * @param numbers 番号の配列
 * @returns {*}
 */
BingoService.prototype.shuffle = function (numbers) {
    numbers.sort(function () {
        return Math.random() - 0.5;
    });

    return numbers;
};

/**
 * 番号配列の先頭を取り出して消去する
 * @param numbers 番号の配列
 * @returns {*}
 */
BingoService.prototype.pickNumber = function (numbers) {
    var pickedNumber = numbers[0];
    numbers.splice(0, 1);

    return pickedNumber;
};