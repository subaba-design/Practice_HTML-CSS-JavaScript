/**
 * 課題1: id属性値が `main` のdiv要素にul要素を追加する
 */
 console.log('==========課題1==========');

 const ulElement = document.createElement('ul');
 const elementMainId = document.getElementById('main');
 
 elementMainId.appendChild(ulElement);
 
 
 /**
  * 課題2: 課題1で作成したul要素に5つのli要素(DOM)を追加する
  *   - forループを使って5つのli要素(DOM)を追加すること
  *   - li要素(DOM)には先頭から次のテキストをセットする(textContentを使うこと)
  *     1. アイテム1
  *     2. アイテム2
  *     3. アイテム3
  *     4. アイテム4
  *     5. アイテム5
  */
 console.log('==========課題2==========');
 
 for (let i = 1; i <= 5; i++) {
     const liElement = document.createElement('li');
 
     liElement.textContent = `アイテム${i}`;
 
     ulElement.appendChild(liElement);
 }
 
 
 /**
  * 課題3: 課題2で作成した5つのli要素の内、先頭から4番目(アイテム4)の要素を削除する
  *   - ヒント: DOMのchildrenプロパティが使える
  *     - https://developer.mozilla.org/ja/docs/Web/API/ParentNode/children
  */
 console.log('==========課題3==========');
 
 ulElement.removeChild(ulElement.children[3]);
 
 
 /**
  * 課題4: id属性値が `remove-all-items` のul要素内の全てのli要素を削除する
  *   - ul要素は削除しないこと
  */
 console.log('==========課題4==========');
 
 const elementRemoveAllItemsId = document.getElementById('remove-all-items');
 
 while (elementRemoveAllItemsId.firstChild) {
     elementRemoveAllItemsId.removeChild(elementRemoveAllItemsId.firstChild)
 } 