// 課題1: 人間を表すPersonクラスを作成する
// - クラス名はPersonとする
// - Personクラスのインスタンスは次の情報を持つようにする
//   - name: 名前
//   - age: 年齢
//   - gender: 性別
//   - height: 身長
//   - weight: 体重
// - インスタンスごとの固有の情報はコンストラクタ経由でセットする
console.log('==========課題1==========');
class Person {
    constructor(name, age, gender, height, weight) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
} 


// 課題2: 自分もしくは、架空の人の情報を使って１人の人間を表すPersonインスタンスを生成する
// - インスタンスは変数 `me` に代入する
console.log('==========課題2==========');
const me = new Person('スーババ', 23, '男', 169, 55);


// 課題3: 課題2で生成したインスタンスの情報をconsole.logを使って、「名前」「年齢」「性別」「身長」「体重」が正しくセットされていることを確認する
console.log('==========課題3==========');
console.log('me? :', me);
console.log('名前は？ :', me.name);
console.log('年齢は？ :', me.age);
console.log('性別は？ :', me.gender);
console.log('身長は？ :', me.height);
console.log('体重は？ :', me.weight);