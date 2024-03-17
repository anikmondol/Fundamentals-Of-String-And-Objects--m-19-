const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary : 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin']
}

person.salary = 30000;
person['age'] = 28;
person['fav places'] = ['maldives', 'bali']
console.log(person);


const propName = 'profession';
person[propName] = 'dev';
console.log(person);