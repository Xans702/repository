/***
 1. Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
число и считаете. Результат надо вывести на страницу с помощью alert.
*************/

/*
let kursDollar = 76;
let kursEuro = 90;

let sumDollars = 0,
    sumEuro = 0;

let sumRubles = Number(prompt("Введите сумму в рублях:"));

if(sumRubles .toString() !== "NaN") {
    sumDollars = (sumRubles / kursDollar).toFixed(2);
    sumEuro = (sumRubles / kursEuro).toFixed(2);

    alert(`Сумма в рублях ${sumRubles} в долларах = ${sumDollars},\nв евро = ${sumEuro}`);
}
else {
    alert("Неверная сумма!")
}
*/

/*
let a; //длина основания трапеции
let b; //длина основания трапеции
let h; //высота трапеции
let S; //площадь трапеции

a = +prompt("Длина основания (a) трапеции:", 10);
b = +prompt("Длина основания (b) трапеции:", 7);
h = +prompt("Высота трапеции:", 5);

S = ((a + b) / 2) * h;

alert(`Площадь трапеции = ${S} кв.м`);
*/

/***
 * 5. Введите столбец чисел от 1 до 50.
 ***/
 let result = "";

 for(let i = 1; i <= 50; i++) {
     if(i % 2 != 0) {
         console.log(`${i}\n`);
         result = result + i + "\n";
     }
 }
 alert(result);

/***
 6. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
 */
/*
 let a = 14;
 let b = 3;

 alert(`Остаток от деления a на b = ${a % b}`)

 155 % 155 = 
 */