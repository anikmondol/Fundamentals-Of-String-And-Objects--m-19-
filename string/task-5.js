// Capitalize Every first Letter of each word in a String

const task5 = 'Capitalize Every first Letter of each word in a String';


const word = task5.split(' ');

for(let i = 0; i <word.length; i++){
    word[i] = word[i][0].toUpperCase() + word[i].substring(1);
}

const w = word.join(' ')

// console.log(word.join(' '));

console.log(w);





const realFriend = [ 'Rahim', ' kahim', ' lahim', ' fahim' ];


console.log(realFriend.join(''));
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));