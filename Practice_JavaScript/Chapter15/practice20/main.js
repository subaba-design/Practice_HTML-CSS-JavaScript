/**
 * 課題1: h1要素でid属性値が `title` のテキスト内容を変更する
 *   - textContentを使う
 *     - 「JSで変更した後のタイトル」というテキストをセットする
 */
console.log('==========課題1==========');

const elementTitleId = document.getElementById('title');

console.log('変更前のelementTitleId.textContent : ', elementTitleId.textContent);

elementTitleId.textContent = 'JSで変更した後のタイトル';

console.log('変更後のelementTitleId.textContent : ', elementTitleId.textContent);


/**
 * 課題2: p要素でid属性値が `description` のテキスト内容を変更する
 *   - innerHTMLを使う
 *     - 「JSで変更した後の説明文」というテキストをセットする
 *   - strong要素を使って「説明文」を強調する
 */
console.log('==========課題2==========');

const elementDescriptionId = document.getElementById('description');

console.log('変更前のelementDescriptionId.innerHTML : ', elementDescriptionId.innerHTML);

elementDescriptionId.innerHTML = 'JSで変更した後の<strong>説明文</strong>';

console.log('変更後のelementDescriptionId.innerHTML : ', elementDescriptionId.innerHTML);


/**
  * 課題3: img要素でid属性値が 'profile' のsrc属性値を変更する
  *   - セットする画像は以下のいずれかで対応する
  *     - 自分で用意する
  *     - 「https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg」を使う
  */
console.log('==========課題3==========');

const elementProfileId = document.getElementById('profile');

console.log('変更前のelementProfileId : ', elementProfileId);

elementProfileId.setAttribute('src', 'https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg');

console.log('変更後のelementProfileId : ', elementProfileId);


/**
 * 課題4: 課題1で作成したh1要素のDOMにクラス属性値をセットする
 *   - セットするクラス属性値はstyle.cssの中身を参考にする
 *     - 背景色がh1要素の背景色が黄色になればOKです
 */
console.log('==========課題4==========');

console.log('変更前のelementTitleId : ', elementTitleId);

elementTitleId.className = 'bg-yellow';

console.log('変更後のelementTitleId : ', elementTitleId);