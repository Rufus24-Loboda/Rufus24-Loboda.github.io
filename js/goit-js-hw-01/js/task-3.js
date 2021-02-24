let message = prompt('Введіть пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';
if (message === null) {
    confirm('Скасовано користувачем!');
}
else if (message === "ADMIN_PASSWORD") {
    confirm('Ласкаво просимо!');
}
else {
    confirm('Доступ заборонений, невірний пароль!');
}