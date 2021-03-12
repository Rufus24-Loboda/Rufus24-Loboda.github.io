
// Практичне завдання 2. Функції
// 1
// function hello1 (){
//     console.log('Привіт JavaScript');
// };
// hello1 ();
// 2
// function hello2 (name) {
//     console.log("Привіт, " + name);
// };
// hello2 ("Petro");
// 3
// function mul (n, m) {
//     console.log (n + m);
//     console.log (n * m);
//     console.log (n - m);
// };
// mul (7, 2);
// 4
// let myNewArrowFunction = (...args) => {
//     console.log(args);
// };
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");
// 5
const myAverageScore = function (...args) {
let badGrade = 0;
for (const arges of args) {
    badGrade += arges;
}
badGrade = badGrade/args.length;
if (badGrade >= 91 && badGrade <= 100) {
    console.log('My average score: A');
} else if (badGrade >= 81 && badGrade <= 90) {
    console.log('My average score: B');
} else if (badGrade >= 71 && badGrade <= 80) {
    console.log('My average score: C');
} else if (badGrade <= 70) {
    console.log('My average score: D');
}
}
myAverageScore(100, 75, 81, 96);
myAverageScore(45, 63, 85, 70);
myAverageScore(77, 82, 60, 58);
myAverageScore(93, 99, 93, 96);
console.log("Я взвгвлі не розумію що це за школа де менше 70 вважаеться просто жахом не заздрю людям для кого тест готувався")


