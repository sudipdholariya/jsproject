// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)



const x = function () { };

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

const children = 3;

// Checking for literal 0
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Solution
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}


// Checking for empty arrays
const posts = ['ram'];

// Always true even when empty
if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Solution
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty objects
const user = {
  name: 'pd',
};

// Always true, even when no properties
if (user) {
  console.log('List User');
} else {
  console.log('No User');
}


// Solution
if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}


// Loose Equality (==)
// console.log(false == 0); // true
// console.log('' == 0); // true
// console.log(null == undefined); // true

// Strict Equality
// console.log(false === 0); // false
// console.log('' === 0); // false
// console.log(null === undefined); // false

// Logical Operater
console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;

a = 10 && 20 && 30;

a = 10 && 0 && 30;

a = 10 && '' && 0 && 30;

console.log(a);

const posts1 = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts1[0]);

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined
//Nullish coalescing assignment (??=)


// c = 10 ?? 20;
// c = null ?? 20;
// c = undefined ?? 30;
// //c = 0 ?? 30;
// //c = '' ?? 30;

// console.log(c);

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;  // 

console.log(c);




