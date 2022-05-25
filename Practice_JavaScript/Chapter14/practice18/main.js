// 課題1: Animalクラス、Personクラスを実装する
// - 各クラスは以下の継承関係を持つ
//   - AnimalクラスはPersonクラスの親クラスとなる
//   - PersonクラスはAnimalクラスを親にもつ子クラスとなる
// - Animalクラスの内容
//   - プロパティ
//     - _nameプロパティを持つ(string型)
//   - メソッド(コンストラクタ含む)
//     - constructor
//       - 引数は以下の1つを受け取る
//         - name: string型で名前を表す
//           - _nameプロパティに引数nameの値を代入する
//     - speak
//       - console.logで('...(無言)')を出力する
// - Personクラスの内容
//   - プロパティ
//     - なし
//   - メソッド
//     - constructor
//       - 引数は次の1つを受け取る
//         - name: string型で名前を表す
//           - 親クラスのconstructor経由で_nameプロパティに引数nameをセットする
//     - speak
//       - ①. console.logで 'こんにちは、〇〇です。' と出力する
//         - 〇〇には_nameプロパティの値が入る
//       - ②. ①の実行後に親クラスのspeakメソッドを実行して「...(無言)」を出力する
console.log('==========課題1==========');

class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    speak() {
        console.log('...(無言)');
    }
}

class Person extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        // console.log(`こんにちは、${this._name}です。`);
        // ↑この実装にしていたが、このようにアンダーバーのある値（プライベートな値）を外部から直接アクセスするのは良くない
        // そのため、Animalにgetメソッドを作り、そこからアクセスする。
        console.log(`こんにちは、${this.name}です。`);
        super.speak();
    }
}


// 課題2: Personクラスのインスタンスを実行して、speakメソッドを実行して、課題1のPersonクラスのspeakメソッドの①と②が出力されることを確認する
console.log('==========課題2==========');

const person = new Person('スーババ');

person.speak();