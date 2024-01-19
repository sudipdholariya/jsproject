
// for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//      console.log(element);   
// }


// for(let num of nums){
//     console.log(num);
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

// for(let ob of person){
//     console.log(ob);
// }


// for(let item in person){
//     console.log(item,person[item]);
// }

// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }
// let fruits= ["apple","orange","banana","pinepale"]
// let nums = [22,33,4,5,56]


// let person = {
//         name:"sudip",
//         age:23,
//         email:"creative@gmail.com"
// }


// let newarr=nums.map((num)=>{
//     return num*2;
// })

    // let oldarr = nums.filter((item)=>{
    //         return item>10
    // })

    // let total =  nums.reduce((acc,sum)=>{
    //         return acc+sum
    // },0)

// console.log(total);
// console.log(nums);


// let product = [
//     {
//         name:"rahul",
//         age:22,
//         email:"creative@gmail.com"
//     },{
        
//         name:"kavan",
//         age:26,
//         email:"creative22@gmail.com"
//     },{
        
//         name:"kiran",
//         age:55,
//         email:"creative33@gmail.com"
//     }
// ]

// product.forEach((item)=>{
//     // console.log(item.name);
   
// })


// console.log(Object.values(product));
// let map = new Map()

// map.set("a",1)
// map.set("b",2)
// map.set("a",99);
// map.set("three",33)

// console.log(map);

// map.forEach((item,val)=>{
//     console.log(item,val);
// })



// fruits.forEach((item)=>{
//     console.log(item);
// })
// function flist(item){
//     console.log(item);
// }

// fruits.forEach(flist)

// fruits.forEach(function(item){
//         console.log(item);
// })

// nums.forEach((num)=>{
//         console.log(num);
// })

// person.forEach(element => {
//     console.log(element);
// });





// EXTRA

const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// for (const item of items) {
//     console.log(item);
// }

// console.log('-----------------------')
// for (const user of users) {
//     console.log(user.name);
// }

// const str = 'Hello World';

// for (let letter of str) {
//     console.log(letter);
// }


// Loop over Maps
const map = new Map();


map.set('name', 'shyam');
map.set('age', 30);


// for (const [key, value] of map) {
//     console.log(key, value);
// }


const colorObj = {
    color1: 'red',
    color2: 'Yellow',
    color3: 'blue'
};

// for (let color in colorObj) {
//     console.log(color, colorObj[color]);
// }
// Looop Through Arr
const Arrobj = ['Red', 'Blue', 'Pink', 'Yellow'];

// for (let color in Arrobj) {
//     console.log(color, Arrobj[color]);
// }
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (social) {
//     console.log(social);
// });

// Short Form
// socials.forEach((social) => console.log(social));

// socials.forEach(function (social, index, arr) {
//     console.log(`${social}-${index}-${arr}}`);
// })



// function logSocials(social) {
//     console.log(social);
// }

// socials.forEach(logSocials);

// const socialObjs = [
//     { name: 'Twitter', url: 'https://twitter.com' },
//     { name: 'Facebook', url: 'https://facebook.com' },
//     { name: 'Linkedin', url: 'https://linkedin.com' },
//     { name: 'Instagram', url: 'https://instagram.com' },
// ];


// socialObjs.forEach((social)=>{console.log(social.name)})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers);

const evennumber3 = [];
numbers.forEach((number) => {
    if (number % 2 == 0) {
        evennumber3.push(number);
    }
})
// console.log(evennumber3);



const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
const retailcompany = companies.filter((company) => {

    return company.category === 'Retail';
})

// console.log(retailcompany);
const earlycompany = companies.filter((company) => {
    return company.start > 1980 && company.end < 2005
});
// console.log(earlycompany);
const oldcompany = companies.filter((company) => {
    return company.end - company.start >= 10
})
// console.log(oldcompany);
const doublednumber = numbers.map((number) => number * 2)

// console.log(doublednumber);
const numberby2 = [];

numbers.forEach((number) => {
    numberby2.push(number * 2);
})

// console.log(numberby2);
const compname = companies.map((company) => company.name);
// console.log(compname);
const comandcat = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
});
// console.log(comandcat);
const comandyear = companies.map((company)=>{
    return {
        name:company.name,
        length:company.end-company.start+' Years'
    }
})

// console.log(comandyear);


const sqrandsqrt = numbers.map((number)=>Math.sqrt(number)).map((number)=>number*2);

// console.log(sqrandsqrt);

const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2);

//   console.log(squareAndDouble);

const squareAndDouble2 = numbers.map(function (number) {
  return Math.sqrt(number);
})
.map(function (sqrt) {
  return sqrt * 2;
})
.map(function (sqrtDoubled) {
  return sqrtDoubled * 3;
});

// console.log(squareAndDouble2);

const evenDouble = numbers
.filter((number)=>number%2===0)
.map((number)=>number*2);

// console.log(evenDouble);

const sum1 = numbers.reduce(function(acc,currentvalue){
    return acc+currentvalue
},0)

// console.log(sum1);

const sum= numbers.reduce((acc,cvalue)=>acc+cvalue,0);
// console.log(sum);
// Using a for loop
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
      acc += cur;
    }
    return acc;
  };
  
const Add=sum3();
// console.log(Add);

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];
  


const total= cart.reduce((acc,product)=>{
    return acc+product.price;
},0);

console.log(total);



