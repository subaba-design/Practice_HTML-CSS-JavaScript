/**
 * 課題: 以下の条件を満たすオブジェクトを作る
 *   - 変数名はmyArrayで値はオブジェクトする
 *   - オブジェクトmyArrayは次のプロパティと値を持つ
 *     - arrayプロパティ: 初期値として[1, 2, 3]がセットされた配列
 *     - forEachプロパティ : 「Array.prototype.forEach()」と同じ機能を持つメソッド
 *       - forEachメソッド内では「Array.prototype.forEach()」を使わずfor文でループを行うこと
 *       - forEachメソッドは引数にコールバック関数を受け取る
 *         - コールバック関数の引数名は「callback」とする
 *         - コールバック関数は2つの引数を持つ
 *           - 第1引数は配列の各要素
 *           - 第2引数は配列の各要素に対応するインデックス番号
 *     - mapプロパティ : 「Array.prototype.map()」と同じ機能を持つメソッド
 *       - 自作したforEachメソッドを使って実装する
 *         - this経由でforEachメソッドを実行する
 *     - filterプロパティ : 「Array.prototype.filter()」と同じ機能を持つメソッド
 *       - 自作したforEachメソッドを使って実装する
 *         - this経由でforEachメソッドを実行する
 */
 const myArray = {
    array: [1, 2, 3, 4, 5, 6, 7],
    forEach: function (callback) {
        for (let index = 0; index < this.array.length; index++) {
            callback(this.array[index], index);
        }
    },
    map: function (callback) {
        const resultingArray = [];
        this.forEach((el, i) => {
            const newEl = callback(el, i);
            resultingArray.push(newEl);
        });
        return resultingArray;
    },
    filter: function (callback) {
        const resultingArray = [];
        this.forEach((el, i) => {
            const condition = callback(el, i);
            if (condition) {
                resultingArray.push(el);
            }
        });
        return resultingArray;
    }
};


// ここでmyArray.forEachを実行して、console.logを使って各値とインデックスを出力する
console.log('----------forEach----------');
myArray.forEach((EL, I) => {
    console.log('index? : ', I, '  element? : ', EL);
});
console.log('myArray.array? : ', myArray.array);


// ここでmyArray.mapを実行したあと、mapの戻り値とmyArray.arrayをconsole.logで出力する
// mapメソッドで取得する値は、myArray.arrayの各要素をindex倍した値とする。(value * index)
console.log('----------map----------');
const mappedArray = myArray.map((EL, I) => {
    return EL * I;
});
console.log('mappedArray? : ', mappedArray);
console.log('myArray.array? : ', myArray.array);

//ここでfilterを実行したあと、filterの戻り値とmyArray.arrayをconsole.logで出力する
// filterメソッドで取得する値は、myArray.arrayの奇数だけとする
console.log('----------map----------');
const filteredArray = myArray.filter((EL, I) => {
    return EL % 2 === 1;
});
console.log('filteredArray? : ', filteredArray);
console.log('myArray.array? : ', myArray.array);