const first = 'anik';
const last = 'Mondal';

// const fullName = first + last;
const fullName = first + ' ' + last;

// console.log(fullName);


const fullName1 = first.concat(' ').concat(last);
// console.log(fullName1);


// console.log(last.includes('e'))


const friendsStr = 'Rahim, kahim, lahim, fahim';
const friends = friendsStr.split()
// const friends = friendsStr.split(',')

// console.log(friends);



const realFriend = [ 'Rahim', ' kahim', ' lahim', ' fahim' ];

console.log(realFriend.join('-'));
