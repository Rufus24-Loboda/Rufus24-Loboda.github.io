const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
let key = Object.keys(user);
for (const client of key) {
    console.log(`${key}: ${key}.`)
}