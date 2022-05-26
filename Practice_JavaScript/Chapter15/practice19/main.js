/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
console.log('==========課題1==========');

const elementTitleId = document.getElementById('title');
console.log('elementTitleId? : ', elementTitleId);


/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
console.log('==========課題2==========');

const elementItemContainerId = document.querySelector('#item-container');
console.log('elementItemContainerId? : ', elementItemContainerId);


/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
console.log('==========課題3==========');

const liElements = document.getElementsByTagName('li');
console.log('liElements? : ', liElements)


/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
console.log('==========課題4==========');

const elementsItemClass = document.getElementsByClassName('item');
console.log('elementsItemClass? : ', elementsItemClass);


/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */
console.log('==========課題5==========');

const elementsItemClassByQuerySelectorAll = document.querySelectorAll('.item');
console.log('elementsItemClassByQuerySelectorAll? : ', elementsItemClassByQuerySelectorAll);