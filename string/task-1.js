const task1 = 'Count how many times a string has the letter';

let sum = 0;

for(const num of task1){
    if(num.includes('a')){
        sum += 1;
    }
}

console.log(sum);