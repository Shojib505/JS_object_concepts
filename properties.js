const bottole = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
//getting all properties keys
const keys = Object.keys(bottole);
// console.log(keys);

//getting all values
const values = Object.values(bottole);
// console.log(values);

const pairs = Object.entries(bottole)
// console.log(pairs);


Object.seal(bottole)
/* if you seal any Obj then 
-you can't dete any proiperty or value
-you can't insert any proiperty or value
-but it can be changed or modifi any proiperty or value 
*/
Object.freeze(bottole)
/* if you seal any Obj then 
-you can't dete any proiperty or value
-you can't insert any proiperty or value
-you can't changed or modifi any proiperty or value
*/
delete bottole.isCleaned;
console.log(bottole);
