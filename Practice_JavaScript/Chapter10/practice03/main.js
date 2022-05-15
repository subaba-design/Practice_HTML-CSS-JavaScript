const weather = prompt("今日の天気は？（晴れ or くもり or 雨）");

if (weather === "晴れ") {
    alert("今日は気持ちの良い一日になりそうですね！");
} else if (weather === "くもり") {
    alert("どんよりした天気ですが、今日も一日がんばりましょう！");
} else if (weather === "雨") {
    alert("家でゆっくり過ごすのもいいと思いますよ！");
} else {
    alert("晴れ、くもり、雨以外の文字列に対応していません。");
};