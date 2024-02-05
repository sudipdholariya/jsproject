// // callback = a function that is passed as an argument
// //                    to another function.

// //                    used to handle asynchronous operations:
// //                    1. Reading a file
// //                    2. Network requests
// //                    3. Interacting with databases

// //                    "Hey, when you're done, call this next."

// hello(goodbye);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function goodbye(){
//     console.log("Goodbye!");
// }


// ////----------------------THIS---------------------
// // 	 this = reference to the object where THIS is used
// // (the object depends on the immediate context)

// // const person1 = {
// //     name: "Spongebob",
// //     favFood: "hamburgers",
// //     sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
// //     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// // }
// // const person2 = {
// //     name: "Patrick",
// //     favFood: "pizza",
// //     sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
// //     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// // }

// // person1.eat();
// // person2.eat();


// // -------------------------CONSTRUCTER---------------------------
// // / ------------------------constructor = special method for defining the
// //                          properties and methods of objects

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
// const car3 = new Car("Dodge", "Charger", 2026, "silver");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// car1.drive();
// car2.drive();
// car3.drive();

// /////////----------------------------------------------------------
// // class = (ES6 feature) provides a more structured and cleaner way to 
// //              work with objects compared to traditional constructor functions
// //              ex. static keyword, encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// ///////----------------------------STATIC-----------------------------------------
// // static = keyword that defines properties or methods that belong 
// //               to a class itself rather than the objects created
// //               from that class (class owns anything static, not the objects)

// // ------------ EXAMPLE 1 ------------
// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));
// ///////
// // ------------ EXAMPLE 2 ------------

// class User{

//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`);
//     }
//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
//     }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.getUserCount();

// ///------------------------------------------INHERITACNE-----------------------------------
// // inheritance = allows a new class to inherit properties and methods 
// //                         from an existing class (parent -> child)
// //                         helps with code reusability

// class Animal{

//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{

//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{

//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal{
    
//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// // const rabbit = new Rabbit();
// // const fish = new Fish();
// // const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();



// ////////////////////////------SUPER------////////////////////////
// // super = keyword is used in classes to call the constructor or
// //              access the properties and methods of a parent (superclass)
// //              this = this object
// //              super = the parent

// class Animal{

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal{
    
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal{
    
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// rabbit.run();
// fish.swim();
// hawk.fly();




// ///////////////////// GETTER AND SETTER  /////////////
// class Rectangle{

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }


//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }
   
//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }


//     get area(){
//         return `${(this._width * this._height).toFixed(1)}cm`;
//     }
// }

// const rectangle = new Rectangle(2, 3);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// // /////-------------------------DESTRUCTURING-----------------------------//////////
// // destructuring =  extract values from arrays and objects,
// //                              then assign them to variables in a convenient way
// //                              [] = to perform array destructuring
// //                              {} = to perform object destructuring

// // ---------- EXAMPLE 1 ----------
// // SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// // ---------- EXAMPLE 2 ----------
// // SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ['red', 'green', 'blue', 'black', 'white'];

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(colors);

// // ---------- EXAMPLE 3 ----------
// // ASSIGN ARRAY ELEMENTS TO VARIABLES

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// //  ----------------------------------- EXAMPLE 4 ----------
// // EXTRACT VALUES FROM OBJECTS

// const person1 = {
//   firstName: 'Spongebob',
//   lastName: 'Squarepants',
//   age: 30,
//   job: "Fry cook",
// };

// const person2 = {
//   firstName: 'Patrick',
//   lastName: 'Star',
//   age: 34
// };

// const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// // ---------- EXAMPLE 5 ----------
// // DESTRUCTURING IN FUNCTION PARAMETERS

// function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// displayPerson(person1);
// displayPerson(person2);
// // ================================OBJECT NESTING=========================
// // nested objects = Objects inside of other Objects.
// //                               Allows you to represent more complex data structures
// //                               Child Object is enclosed by a Parent Object

// //                               Person{Address{}, ContactInfo{}}
// //                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

// class Person{

//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{

//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St.", 
//                                                     "Bikini Bottom", 
//                                                     "Int. Waters");

// const person2 = new Person("Patrick", 37,   "128 Conch St.", 
//                                                     "Bikini Bottom", 
//                                                     "Int. Waters");

// const person3 = new Person("Squidward", 45, "126 Conch St.", 
//                                                     "Bikini Bottom", 
//                                                     "Int. Waters");

// console.log(person1.name);
// console.log(person1.age); 
// console.log(person1.address);                                   
// console.log(person1.address.street);
// console.log(person1.address.city);
// console.log(person1.address.country);

// -----------------------------------ARRAY OF OBJECTS-------------------------------------------


// const fruits = [ {name: "apple", color: "red", calories: 95}, 
//                           {name: "orange", color: "orange", calories: 45}, 
//                           {name: "banana", color: "yellow", calories: 105}, 
//                           {name: "coconut", color: "white", calories: 159}, 
//                           {name: "pineapple", color: "yellow", calories: 37}];

// // Access properties of a fruit object
// console.log(fruits[0].calories);

// // Add a new fruit object
// fruits.push({ name: "grapes", color: "purple", calories: 62});

// // Remove the last fruit object
// fruits.pop();

// // Remove fruit objects by indices
// fruits.splice(1, 2);

// // ---------- forEach() ----------
// fruits.forEach(fruit => console.log(fruit));
// fruits.forEach(fruit => console.log(fruit.name));
// fruits.forEach(fruit => console.log(fruit.color));
// fruits.forEach(fruit => console.log(fruit.calories));

// // ---------- map() ----------
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// // ---------- filter() ----------
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// // ---------- reduce() ----------
// const maxFruit = fruits.reduce( (max, fruit) =>
//                                                         fruit.calories > max.calories ?
//                                                         fruit : max);

// const minFruit = fruits.reduce( (min, fruit) =>
//                                                        fruit.calories < min.calories ?
//                                                        fruit : min);

// console.log(maxFruit);
// console.log(minFruit);


// -----------------------------------------SORT()-----------------------------------------------
// / sort() = method used to sort elements of an array in place.
// //               Sorts elements as strings in lexicographic order, not alphabetical
// //               lexicographic = (alphabet + numbers + symbols) as strings

// // ---------- EXAMPLE 1 ----------
// const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => a - b); //FORWARD
// numbers.sort((a, b) => b - a); //REVERSE

// console.log(numbers);

// // ---------- EXAMPLE 2 ----------
// const people = [{name: "Spongebob", age: 30, gpa: 3.0},
//                             {name: "Patrick", age: 37, gpa: 1.5},
//                             {name: "Squidward", age: 51, gpa: 2.5},
//                             {name: "Sandy", age: 27, gpa: 4.0}]

// people.sort((a, b) => a.age - b.age); //FORWARD
// people.sort((a, b) => b.age - a.age); //REVERSE

// people.sort((a, b) => a.gpa - b.gpa); //FORWARD
// people.sort((a, b) => b.gpa - a.gpa); //REVERSE

// people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD
// people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE

// console.log(people);




// //------------------------------------SHUFFLE----------------------------------
// / Fisher-Yates algorithm

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// shuffle(cards);

// console.log(cards);

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }


// /--------------------------------import/export----------------------
//  ES6 Module = An external file that contains reusable code
// //                          that can be imported into other JavaScript files
// //                          Can contain variables, classes, functions ... and more
// //                          Introduced as part of ECMAScript 2015 update

// // ---------- index.js ----------

// import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

// // ---------- mathutil.js ----------

// export const PI = 3.14159;

// export function getCircumference(radius){
//     return 2 * PI * radius;
// }

// export function getArea(radius){
//     return PI * radius * radius;
// }

// export function getVolume(radius){
//     return 4 /3 * PI * radius * radius * radius;
// }

// ------------------------------------synchronous--------------------------------

// // synchronous  = Executes line by line consecutively in a sequential manner 
// //                             Code that waits for an operation to complete.

// // asynchronous = Allows multiple operations to be performed concurrently without waiting
// //                              Doesn't block the execution flow and allows the program to continue
// //                             (I/O operations, network requests, fetching data)
// //                             Handled with: Callbacks, Promises, Async/Await

// // ASYNCHRONOUS
// function func1(callback){
//     setTimeout(() => {console.log("Task 1");
//                                     callback()}, 3000);
// }

// // SYNCHRONOUS
// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// func1(func2);
// ///////-----------------------Error Handling-------------------------------------
// / Error = An Object that is created to represent a problem that occurs
// //              Occur often with user input or establishing a connection

// // try { } = Encloses code that might potentially cause an error
// // catch { } = Catch and handle any thrown Errors from try { }
// // finally { } = (optional) Always executes. Used mostly for clean up
// //                    ex. close files, close connections, release resources

// try{
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));
    
//     if(divisor == 0){
//         throw new Error("You can't divide by zero!");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("This always executes");
// }

// console.log("You have reached the end!");



// ---------------------------PROMISES------------------------------
// // Promise = An Object that manages asynchronous operations.
// //                    Wrap a Promise Object around {asynchronous code}
// //                    "I promise to return a value"
// //                    PENDING -> RESOLVED or REJECTED
// //                   new Promise((resolve, reject) => {asynchronous code})

// // DO THESE CHORES IN ORDER

// // 1. WALK THE DOG
// // 2. CLEAN THE KITCHEN
// // 3. TAKE OUT THE TRASH

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = false;

//             if(dogWalked){
//                 resolve("You walk the dog 🐕");
//             }
//             else{
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You clean the kitchen 🧹");
//             }
//             else{
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You take out the trash ♻");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

//         }, 500);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//                   .then(value => {console.log(value); return takeOutTrash()})
//                   .then(value => {console.log(value); console.log("You finished all the chores!")})
//                   .catch(error => console.error(error));



// ---------------------------async/await----------------------------------------
// / Async/Await = Async = makes a function return a promise
// //                            Await = makes an async function wait for a promise

// // Allows you write asynchronous code in a synchronous manner
// // Async doesn't have resolve or reject parameters
// // Everything after Await is placed in an event queue

// async function doChores(){

//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);
    
//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);
    
//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);
        
//         console.log("You finsihed all the chores!");
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// doChores();

// -------------------------------JSON FILE--------------------------------
// / JSON = (JavaScript Object Notation) data-interchange format 
// //               Used for exchanging data between a server and a web application
// //               JSON files {key:value} OR [value1, value2, value3]

// // JSON.stringify() = converts a JS object to a JSON string.
// // JSON.parse() = converts a JSON string to a JS object

// // ---------- JSON.stringify() ----------

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// };
// const people = [{
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
// },
// {
//     "name": "Squidward",
//     "age": 50,
//     "isEmployed": true
// },
// {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
// }];

// const jsonString = JSON.stringify(people);

// console.log(jsonString);

// // ---------- JSON.parse() ----------

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
//                                      {"name": "Patrick","age": 34,"isEmployed": false},
//                                      {"name": "Squidward","age": 50,"isEmployed": true},
//                                      {"name": "Sandy","age": 27,"isEmployed": false}]`;

// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);

// // ---------- fetch() ----------
// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value)))
//     .catch(error => console.error(error));