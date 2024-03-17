const school = "RAJ Uttara Model School";



// console.log(school);
// console.log(school.toLocaleLowerCase());
// console.log(school.toUpperCase());




// uppercase: -----> ABCD EFG 
// lowercase: -----> abcd efg





const subject = 'Chemistry';
const book = 'chemistry';


if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log(true);
}else{
    console.log(false);
}



const drink = 'water';
const liquid = 'water '


if(drink.trim() === liquid.trim()){
    console.log('there is equal');
}else{
    console.log('there is not equal');
}