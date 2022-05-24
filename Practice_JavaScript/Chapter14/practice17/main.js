// 課題1: クイズデータをAPI経由で取得するクラスを作成する
// - クラス名はQuizFetcherクラスとする
// - 次のクラスメソッドを作成する
//   - fetchMultipleQuizData : 4択問題のクイズのみをAPI経由で取得する
//   - fetchTrueOrFalseQuizData : 2択問題のクイズのみをAPI経由で取得する
// - クイズデータ取得に利用するAPI
//   - https://opentdb.com/api.php?amount=10
console.log('==========課題1==========');

const API_URL = 'https://opentdb.com/api.php?amount=10';

class QuizFetcher {
    static fetchMultipleQuizData () {
        fetch(API_URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const multipleQuizData = data.results.filter((result) => {
                    return result.type === 'multiple';
                });
                console.log('multipleQuizData', multipleQuizData);
            });
    }

    static fetchTrueOrFalseQuizData () {
        fetch(API_URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const trueOrFalseQuizData = data.results.filter((result) => {
                    return result.type === 'boolean';
                });
                console.log('trueOrFalseQuizData', trueOrFalseQuizData);
            });
    }
}


// 課題2: fetchMultipleQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
console.log('==========課題2==========');
QuizFetcher.fetchMultipleQuizData();


// 課題3: fetchTrueOrFalseQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
console.log('==========課題3==========');
QuizFetcher.fetchTrueOrFalseQuizData();