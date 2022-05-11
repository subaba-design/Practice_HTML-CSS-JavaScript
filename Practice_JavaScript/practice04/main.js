// 課題1: whileを使って100回ループを行う処理を実装する
//   - 変数numを作り0を代入する
//   - whileループの条件にnumを使う
//   - whileループ内の処理
//     - numをインクリメントする(インクリメント => 値を1ずつ足していくこと)
//     - インクリメントする前に変数numの値をconsole.logを使ってデベロッパーツールのConsoleに出力する
//   - インクリメントを繰り返し変数numの値が100以上になったらWhileループを抜ける
//     - デベロッパーツールのConsole上に0~99までの値が出力されたら正解
console.log("==========課題1==========");

let num = 0;

while (num < 100) {
    console.log("num? : ", num);
    num++;
}


// 課題2: 正解が出るまで問題を出し続ける入力ダイアログを表示する
//   - 変数questionに問題文を代入する(ここでは「パンはパンでも食べられないパンは？」の文字列を代入する)
//   - 変数answerに答えを記述する(ここでは「フライパン」を代入する)
//   - 変数inputを用意して何も代入しないで置く
//   - whileループの条件に変数answerとinputを使う(ヒント: 比較演算子を使う)
//   - whileループ内の処理
//     - prompt関数を使って答えを入力するダイアログを表示する (promptのドキュメント: https://developer.mozilla.org/ja/docs/Web/API/Window/prompt)
//       - promptのメッセージには変数questionの内容を表示する
//     - 先程用意した変数inputにpromptで入力された値を代入する
//     - 入力された値に応じて異なるメッセージのアラートダイアログを表示する(ヒント: 比較演算子を使う)
//       - answerとinputの値が異なっていたら「不正解です！」とalertで表示する
//       - answerとinputの値が同じだったら「正解です！」とalertで表示する
//     - 正解が出るまでpromptで問題文を出し続ける
//     - 正解が出たらWhileループを抜ける
console.log("==========課題2==========");

const question = "パンはパンでも食べられないパンは？";
const answer   = "フライパン";
let input;

while (input !== answer) {
    input = prompt("パンはパンでも食べられないパンは？");

    if (input === answer) {
        break;
    }

    alert("不正解です！");
}

alert("正解です！");


// より簡潔なコード
// while (input !== answer) {
//     input = prompt("パンはパンでも食べられないパンは？");
//     if (input === answer) {
//         alert("正解です！");
//     } else {
//         alert("不正解です！");
//     }
// }