const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
}

// console.log(mobile);


// for(const key in mobile){
//     console.log(`${'key :'} ${key} | ${'type :'} ${mobile[key]}` );
// }


// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }


const keys = Object.keys(mobile);

for(const key of keys){
    console.log(key);
    console.log(mobile[key]);
}