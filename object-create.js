//1. using object literal
const student = { name: 'Sojib All', job: 'developer' }
//2. constructor
const person = new Object();

//3. 
const human = Object.create(student);
console.log(human.job)

//4.
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manush', 23)
// console.log(peop)

//5 function
/* you can crate an Object using function
    that call 'Synthetic sugar'
*/
function Manush(name) {
    this.name = name;
}
const man = new Manush('kader');
console.log(man)
