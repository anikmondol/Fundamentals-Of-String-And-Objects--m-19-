const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary : 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin']
}


// console.log(person);



// dot notation -----> dot symbol diye object er property er value access kora

// console.log(person.profession);
const inCome = person.salary;
// console.log(inCome);






// bracket Notation -----> bracket diye access kora
console.log(person['age']);
const boyos = person['age'];
const fav = person['fav places']

console.log(boyos);
console.log(fav);



const keyName = 'profession'
console.log(person[keyName]);