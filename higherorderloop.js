// Normal Loop while,do..while,for,for...of,for...in
// foreach
// Advance array method like filter,map and reduce method 


// let j = 1;

// while (j <= 100) {
//   if (j % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (j % 3 === 0) {
//     console.log('Fizz');
//   } else if (j % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(j);
//   }

//   j++;
// }


// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

for (const item of items) {
    console.log(item);
}
console.log('-----------------------')
for (const user of users) {
    console.log(user.name);
}
console.log('-----------------------')
// Loop over strings
const str = 'Hello World';

for (let letter of str) {
    console.log(letter);
}
console.log('-----------------------')


// Loop over Maps
const map = new Map();


map.set('name', 'shyam');
map.set('age', 30);


// for (const [key, value] of map) {
//     console.log(key, value);
// }

// Loop Through Objects

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
//console.log(socials.__proto__);


// Long Form
// socials.forEach(function (social) {
//     console.log(social);
// });

// Short Form
//socials.forEach((social) => console.log(social));

// We can pass index and arr as argument

// socials.forEach(function (social, index, arr) {
//     console.log(`${social}-${index}-${arr}}`);
// })


//Using named function

// function logSocials(social) {
//     console.log(social);
// }

// socials.forEach(logSocials);
// Array of objects

const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];


// socialObjs.forEach((social)=>{console.log(social.url)})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

//same with foreach loop

const evennumber3 = [];
numbers.forEach((number) => {
    if (number % 2 == 0) {
        evennumber3.push(number);
    }
})
console.log(evennumber3);


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


// Get Only Retail Company
const retailcompany = companies.filter((company) => {

    return company.category === 'Retail';
})

//console.log(retailcompany);
// Get companies that started in or after 1980 and ended in or before 2005

const earlycompany = companies.filter((company) => {
    return company.start > 1980 && company.end < 2005
});
//console.log(earlycompany);

// Get companies that lasted 10 years or more
const oldcompany = companies.filter((company) => {
    return company.end - company.start >= 10
})
//console.log(oldcompany);


const doublednumber = numbers.map((number) => number * 2)

//console.log(doublednumber);

// same with foreach loop
const numberby2 = [];

numbers.forEach((number) => {
    numberby2.push(number * 2);
})

// console.log(numberby2);

// Create an array of company names

const compname = companies.map((company) => company.name);
// console.log(compname);

// Create an array with just company and category

const comandcat = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
});
// console.log(comandcat);

// Create an array of objects with the name and 
//the length of each company in years

const comandyear = companies.map((company)=>{
    return {
        name:company.name,
        length:company.end-company.start+' Years'
    }
})

// console.log(comandyear);

// Chain map methods


const sqrandsqrt = numbers
.map((number)=>Math.sqrt(number)).
map((number)=>number*2);
//console.log(sqrandsqrt);

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

  //console.log(squareAndDouble);

  const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

  //console.log(squareAndDouble2);

// Chaining different methods

const evenDouble = numbers
.filter((number)=>number%2===0)
.map((number)=>number*2);

// console.log(evenDouble);



// const sum1 = numbers.reduce(function(acc,currentvalue){
//     return acc+currentvalue
// },0)

// console.log(sum1);

// const sum= numbers.reduce((acc,cvalue)=>acc+cvalue,0);
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
console.log(Add);



// Shopping cart example (objects)
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];
  


const total= cart.reduce((acc,product)=>{
    return acc+product.price;
},0);

console.log(total);


const total1 = cart.reduce(function(acc,product){
    return acc+product.price;
},0);

console.log('Total Price::'+total1);
















