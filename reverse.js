const sentence = 'I am learning web Dev.'


// const result = ".veD bew gninrael ma I"


// donal
// d
// od
// ndo
// ando
// lando




// let reveres = '';

// for(const letter of sentence){
//     // console.log(letter);
//     reveres = letter + reveres;
// }

// console.log(reveres);


let rev = '';

for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}

// console.log(rev);


// shortcut


const reveres = sentence.split('').reverse().join('')


console.log(reveres);