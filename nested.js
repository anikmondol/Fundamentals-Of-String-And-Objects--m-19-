const college = {
    name : 'vnc',
    class : [11, 12],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}


// console.log(college);
// console.log(college.name);
// console.log(college.unique['color']);

college.unique.result.gpa = 4;
college.unique.result.merit = 'top top...';
college.events[1] = '16 December'

console.log(college.unique['result']['gpa']);
console.log(college.events[1]);
console.log(college);



delete college.name

console.log(college);