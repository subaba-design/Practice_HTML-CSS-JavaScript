/**
 * 課題1: Twitterのタイムラインのような配列を作る
 *   - 変数名はtweetsで配列とする
 *   - tweetsの中には複数のオブジェクトがある
 *     - 1個1個のオブジェクトはツイートを表す
 *     - 全部で2個のツイートオブジェクトを作る
 *   - ツイートオブジェクトは以下の情報を持つ
 *     - username : ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い。)
 *     - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 *     - replies : ツイートに対する返信が格納された(配列)
 *       - repliesに格納されている1個1個のデータもツイートオブジェクト
 *       - 2個のツイートはそれぞれ2個の返信ツイートを持つ
 *       - 返信ツイートは以下の情報を持つ
 *         - username : 返信ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い)
 *         - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 */
console.log('==========課題1==========');
const tweets = [
    {
        username: 'ユーザー１',
        text: 'テキスト１',
        replies: [
            {
                username: 'ユーザー１１',
                text: 'テキスト１１'
            },
            {
                username: 'ユーザー１２',
                text: 'テキスト１２'
            }
        ]
    },
    {
        username: 'ユーザー２',
        text: 'テキスト２',
        replies: [
            {
                username: 'ユーザー２１',
                text: 'テキスト２１'
            },
            {
                username: 'ユーザー２２',
                text: 'テキスト２２'
            }
        ]
    }
]


/**
 * 課題2: 課題1で作ったtweetsの内容を全て表示する
 *   - forEachを使ってtweetsの以下の内容を1つずつconsole.logで出力する
 *     - username
 *     - text
 *     - replies
 *       - repliesの内容もforEachを使って全て表示する
 */
console.log('==========課題2==========');
tweets.forEach((tweet, index) => {
    console.log('=========tweet' + index + '=========');
    console.log('username? : ', tweet.username);
    console.log('text?     : ', tweet.text);
    console.log('replies?  : ');
    tweet.replies.forEach((reply, i) => {
        console.log('     ----------reply' + i + '----------');
        console.log('     username? : ', reply.username);
        console.log('     text?     : ', reply.text);
        console.log('     --------------------------');
    });
    console.log('========================');
});