// Count how many times a string has the letter a or A


const task2 = 'Count how many times a string has the letter a or A'

let sum = 0;


for(const num of task2){
    if(num.includes('a') || num.includes('A')){
        sum += 1;
    }
}


console.log(sum);