// Практичне завдання. Логічні оператори. Розгалуження.
// 1
// const number = 24;
// if (number === 1) {
//     console.log("Сьогодні перше число");
// } 
// 2
// const number = 23;
// if (number %2 === 0) {
//     console.log("Сьогодні перше число");
// } else {
//     console.log ("not Перше число")
// }
// 3
// const number = 5 % 2;
// if (number === 0) {
//     console.log( number + "grn" );
// } else {
//     console.log (number + "євро")
// }
// 4
// const age = prompt('Скільки вам років?');
// if (age <= 16 ) {
//     alert ("діти");
// } else if ( age <= 60) {
//     alert ("дорослі");
// } else if ( age <= 100) {
//     alert ("пенсіонери");
// } else {
//     alert ("You are... 🌚");
// }
// 5
// let heads =  Math.floor(Math.random() * 2);
// let tails =  Math.floor(Math.random() * 2);
// alert (tails);
// alert (heads);
// if (heads==1 && tails == 1 || heads==0 && tails == 0) {
//     alert ('ФАРТ');
// } else {
//     alert ('You are... 🌚');
// }
// 6
let Name = 

prompt ("введіть ваше ім'я");
let surname = prompt ("введіть ваше призвіще");
if (Name.length >5 && surname.length > 4){
    console.log(Name.length + surname.length);
} else {
    console.log('УПС');
}

// 7
// let number = Math.floor(Math.random() * 6);
// if (number == 1) {
//     alert ('1');
// } else if (number == 2) {
//     alert ('2');
// } else if (number == 3) {
//     alert ('3');
// } else if (number == 4) {
//     alert ('4');
// } else if (number == 5) {
//     alert ('5');
// } else {
//     alert ('You are... 🌚')
// }
// 8
// let age = prompt ('введіть вік вашого сусіда зліва');
// if ( age > 12 ) {
//     alert (age + 12);
// } else {
//     alert ('You are... 🌚')
// }