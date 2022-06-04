const bottole = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/*
for(let i=0; i<10;i++){}
for(const num of numbers){} array (object but using index)
for(const prop in student){} object (object but using Property)
*/
for (const prop in bottole) {
    // console.log(bottole[prop])
}
const keys = Object.keys(bottole)
// console.log(keys)
for (const prop of keys) {
    // console.log(bottole[prop])
}
// advanced
const entries = Object.entries(bottole);
// console.log(entries);
// const [key, value] = ['color', 'yellow']
for (const [key, value] of Object.entries(bottole)) {
    console.log(key, value);
}
