
console.log('----------------console.log----------------');

console.log('hoge');

console.log('----------------四則演算子----------------');

console.log('1 + 1');
console.log('1 - 7 - 5');
console.log(1 * 3);
console.log('1 / 3')
console.log('5 % 3')

console.log('5 - 2');

console.log('水嶋 + ヒロ');

console.log('----------------変数----------------');
// 変数とはデータを入れる箱
// 箱の名前が変数名
// 変更に対応しやすい(代入し直せる)
// 同じ値を繰り返し使える
// 値の意味がわかりやすい
// 名前規則

// letは名前の宣言に使う
// 二度宣言することはできない
let name ='水嶋ヒロ';
console.log(name);
name = ('山田孝之');
console.log(name);

let num = 2;
console.log(num);

num = num + 2;
console.log(num);

num -= 2;
console.log(num);

// 定数
// 一度宣言したら二度と代入できない
// 積極的に使う
const age = 30;
// age = 30;
console.log(age);

// テンプレートリテラル
// バッククオート``
const schoolName = 'Nexeed'
console.log(`私の所属先は${schoolName}です`)

// １００円のりんごを３つ税込で計算する計算式を作る
// 計算結果を変数に代入
// console.logで出力
console.log(100 * 3 * 1.1);

let amount = (100 * 3 * 1.1);
console.log(amount);

let amount = 390 * 1.08;
let amount2 = 390 * 1.1;
console.log((amount2 - amount) * 12);