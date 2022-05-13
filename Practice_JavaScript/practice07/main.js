// 課題1: 以下の条件を満たす関数を実装してください
//   - 関数名: kadai_1
//   - 引数:
//     - 第1引数: age => 数値を受け取る
//     - 第2引数: callback => コールバック関数
//       - callbackは以下の条件を満たす関数とする
//         - 引数:
//           - 第1引数: message => 「kadai_1関数」の第1引数である `age` の数値に応じて次のメッセージを受け取る
//             1. 「typeof 値」の結果が 'number' でない場合は 数値以外が入力されたことになる: 「'数値が入力されていません'」
//             2. 数値が20以上: 「'値は20以上です'」
//             3. 数値が10以上20未満: 「'値は10以上20未満です'」
//             4. 数値が10未満: 「'値は10未満です'」
//         - 処理内容:
//           - 第1引数で受けとった `message` の内容を `alert` を使ってアラートダイアログに表示する
//   - kadai_1関数を実装した直後に「kadai_1(数値, コールバック関数)」を呼び出して、アラートダイアログのメッセージ内容が意図通りであることを確認する
console.log('==========課題1==========');

const kadai_1 = (age, callback) => {
    if (typeof age !== 'number') {
        callback('数値が入力されていません');
    } else if (age >= 20) {
        callback('値は20以上です');
    } else if (age >= 10) {
        callback('値は10以上20未満です');
    } else {
        callback('値は10未満です');
    }
};

const cb = (message) => {
    alert(message);
};

kadai_1(23, cb);

// 【正解】
// const kadai_1 = (age, callback) => {
//     let message;
//     if (typeof age !== 'number') {
//         message = '数値が入力されていません';
//     } else if (age >= 20) {
//         message = '値は20以上です';
//     } else if (age >= 10) {
//         message = '値は10以上20未満です';
//     } else {
//         message = '値は10未満です';
//     }
//     callback(message);
// };
// kadai_1(22, (message) => {
//     console.log('入力:22');
//     alert(message);
// });


// 課題2: 以下の条件を満たす即時関数を作る
//   - 2つの引数を受け取る
//     - 第1引数: x => 数値
//     - 第2引数: y => 数値
//   - 処理内容:
//     - 第1引数のx, 第2引数のyを使って足し算した結果(「x + y」の結果)をconsole.logで出力する。
console.log('==========課題2==========');

((x, y) => {
    console.log("x + y = ", x + y);
})(5, 6);