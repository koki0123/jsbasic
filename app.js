
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

// let amount = (100 * 3 * 1.1);
// console.log(amount);

// let amount = 390 * 1.08;
// let amount2 = 390 * 1.1;
// console.log((amount2 - amount) * 12);

console.log('----------------条件分岐----------------');
let int = 3;

// 比較演算子 < <= > > === !==
// 値と型
// 文字列
// 整数
// 小数点
// true or false
// ==と===の違いは文字と数字を識別するとき
// ==!は等しくないとき

if (int === '3') {
  console.log(`${int}は3より大きいです。`)
}

// 論理演算子
// && ||
console.log('else if-----------');
int = 5 ;
if (int >=10) {
  console.jog(int + `は１０以上です`)
} else if (int > 3) {
  console.log(`${int}は３より大きいです。`);
}
else {
  console.log(`${int}は３以下です。`)
}

// switch
// 終了時には必ずbreak
// コロン
console.log(`switch-----------`);
let signal='red';
switch(signal) {
  case 'red':
    console.log('止まれ');
    break;
  case 'green':
    console.log('進め');
    break;
  default:
    console.log('その他');
    break;
}

// 分岐が多いときはswitch,少ないときはif

// 変数を準備、3で割り切れる数のときはBuzz,
// それ以外の時は変数をそのままconsole.log

let number = 6;

if (number % 3 == 0) {
  console.log('Buzz')
}else if(number !== 3) {
  console.log(let)
}

console.log('----------------繰り返し処理----------------');

// for(変数の定義、条件式、変数の更新)

for (let i =1; i<= 10; i++) {
  console.log(i);
}

console.log('while-----------')
let j = 11;
while (j <= 20) {
  console.log(j);
  j+= 2;
}

console.log('-------------アラート------------');
// alert('こんにちは');
// const answer = confirm('削除しますか?');
// console.log(answer);

// const value = prompt('あなたの年齢はいくつですか？', '不明');
// console.log('${value}です');

// 100~0までconsole.logで出力
// 繰り返し処理して３の倍数でBuzz
//if,elseを使って５の倍数でFizz
// 5と3の倍数の時にFizz Buzzと出力する

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
//   if (i % 3 == 0 && i % 5 == 0){
//     console.log('Fizz Buzz')
//   }
//   else if (i % 3 == 0) {
//     console.log('Buzz')
//   } else if(i % 5 == 0){
//     console.log('Fizz')}
//     else{
//     console.log(i)
//   }
// }

console.log('-----------関数-----------');
// 関数のなかで使える変数を引数と呼ぶ

/*
    関数
    複数の処理を1つにまとめたもの
    function 関数名() {
        処理
    }
    組み込み関数
    alert()
*/

// function greeting() {
//   console.log('おはよう');
//   console.log('こんにちは');
// }
// greeting();

// function greeting (greeting) {
//   console.log(greeting);
// }

// greeting('こんにちは')
// greeting('こんばんは')

// console.log('ローカル変数---------')

// function greeting(name) {
//       let morning = 'おはよう' + name;
//       return morning;
// }


// let hoge = greeting('');
// console.log(hoge)

// console.log('関数を変数に代入----------------');

// let greeting = function (name) {
//       let greeting = 'おはよう' + name;
//       return greeting;
// }

// let hoge = greeting('seedKun');
// console.log(hoge);

// function addtax(product, number, tax) {
//   let result= product * number * tax
//   return result

// }
// let result = addtax(500, 10, 1.1);
// console.log(addtax(500, 3, 1.08))

// 勝った数/全試合数=100%

// function SH(all, won) {
//   let winrate = won / all *100
//   return winrate
// }

// let winrate = SH(119, 64);
// console.log(SH(119, 64))

// 2000時間

// function days (goal, time){
//   let result = 2000 / time /365
//   return result
// }

// let result = days (2000,3);
// console.log(days(2000,3))

console.log('----------------タイマー処理----------------');

// console.log('setInterval----------------');
// let i = 100;

// function counDown() {
//   console.log(i--);
// }

// setInterval(function() {
//       countDown();
//   }, 1000)

  // console.log('setTimeout----------------');
  // let j2 = 100;
  //   function countDown() {
  //       console.log(j2--);
  //   }

  //   setTimeout(function() {
  //       countDown();
  //   }, 1000);
  // console.log('setTimeOutで繰り返し + timerをとめる----------------');
  // let k = 100;
  //   function countDown() {
  //       console.log(k--);
  //       let timer = setTimeout(function() {
  //           countDown();
  //       }, 1000);

  //       if (k < 95) {
  //           clearTimeout(timer);
  //           console.log('timer stop');
  //       }
  //   }
  //   countDown();

  console.log('----------------配列----------------');
  let student_list = ['Yamada','Sato','Suzuki'];
  console.log(student_list);
  console.log(student_list[0] = 'Kobayashi');
  // チェーンメソッド
student_list.push('Takahashi');
console.log(student_list);
console.log(student_list)
// NFとAPVの合計額（１年）
// ホークスの選手の配列