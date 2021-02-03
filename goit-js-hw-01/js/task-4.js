let credits = 23580;
const pricePerDroid = 3000;
message = prompt('Скільки бажаєте придбати?');
if (massage === null) {
    console.log('Скасовано користувачем!');
}
else if (credits <= message * pricePerDroid ) {
    console.log('Недостатньо коштів на рахунку!');
}
else {
    console.log(`Ви купили ${message} дроїдів, на рахунку залишилося ${credits-pricePerDroid*message} кредитів.`);
}