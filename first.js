

// const id=4545;

// account=5656;
// let accountname=343434343n
// let balance=33.454
// balance=99
// balance=true
// let acno=null;

// String
//Number
// boolean
//object
// bigint
//undefine
// Symbol

// {
//     var accountid=232
//     let accountnumber=34343;
//     console.log(accountnumber)
//     console.log(accountid)
// }


// console.log(accountnumber)

// console.log(typeof accountname,accountname)
// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2/3)
// console.log(2%3)

// let v=parseInt(4454.565);
// let val="44";
// // val=true
// // let another = Number(val)
// let val1=45;
// val1 = 0
// // let another = String(val1)
// let val2 = null
// let another=Boolean(val2);
// console.log(typeof another,another);

// let num1 = 5;
// let num2 = "55";
// let str="rahul raj";
// let ans;

// // ans=str.charAt(0);
// ans=str.length
// ans=str.includes('raj')
// let url = "https:/www.fkdf.hash%20refrr"

// ans=url.replace('%20','-');
// ans = str.indexOf('h')
// console.log(typeof ans,ans);

// console.log(Math.floor(2.343));
// console.log(Math.ceil(454.76));

// console.log(Math.round(34.63));
// console.log(Math.pow(2,5));

// console.log(2**3);
// console.log(Math.min(22,33,44,5,6));
// console.log(Math.max(454,56,77));

// console.log(Math.floor(Math.random()*100+1));

// let str = new String("kavan-kumar-giri")
// console.log(str.slice(2,4))
// console.log(str.trim());
// console.log(str.toUpperCase());
// console.log(str.toLocaleUpperCase());
// console.log(str.substring(0,5));

// console.log(str.split('-'));


// let num = Number(442323);
// let ct = num.toString();
// console.log(typeof ct ,ct);
// console.log(num.toPrecision(4));

// let name="karan"
// let age=34

// console.log(`my name is ${name} and my age is ${age}`);

// let one = Symbol('123');
// let another = Symbol('123');

// console.log(typeof one,one);
// console.log(typeof another,another);
// console.log(one===another);


// Date
// let d = new Date();

// let timestamp = Date.now()

// console.log(d.toLocaleString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(timestamp);


// console.log(Math.floor(Math.random()*(30-20))+20)

// if(confirm("are you comning")){
//     console.log('good morning');
// }else{
//     console.log('good evening');
// }

// let a,b;
// a= prompt("Enter value for a");
// b=prompt("Enter value for b");
// console.log(a+b);


// let number1 = [22,33,4,5,66,2]
// let number2 = [6,7,11]

// let number3 = [number1,number2] 
// let allnum = [...number1,...number2];
// console.log(allnum);
// // console.log(numbers);

// numbers.push(3)
// numbers.pop();
// numbers.unshift(44)
// numbers.shift()

// numbers.indexOf(4)

// console.log(numbers.indexOf(4));
// let atr=numbers.join()
// let number1=[44,5,[6,44],23,35,323,[232,565,[454,565],999]]

// console.log(number1.includes(5))
// console.log(number1.concat(number2))
// console.log(number1.length)

// console.log(number1.slice(1,3))
// console.log(number1.splice(1,2))


// console.log(number1.flat(2));
// let nu="karan"
// let num1 = Array.from("creative");
// num1= Array.isArray(nu)
// let nu=number2.toString()
// let n1="karan";
// let n2="ram";
// let n3="shyam";    
// // console.log(Array.of(n1,n2,n3))
// let number2=[88,54,2,7,2]
// let number3=[9,67,34]
// // let nm =[...number2,...number3]
// let nm = number2.concat(number3)
// console.log(nm);

// console.log(typeof nu,nu)

// console.log(num1);



// Object literal

// let key1 = Symbol("ky")

// let ob1 = {
//         name:"creative",
//         branch:"utran",
//         pincode:364500,
//         isstrat:false,
//         "full addres":"utran juction ",
//         address:{
//             city:"surat"
//         }   ,
//         holidays:["monday,saturday"],
//         [key1]:"erere"
// }




// Object.freeze(ob1);
// ob1.email="creative@gamil.com"
// console.log(ob1);
// console.log(ob1["full addres"]);
// console.log(ob1["branch"]);
// console.log(ob1.pincode);

// let ob2 = {
//     a:22,
//     b:56
// }

// let ob3 = {ob1,ob2}
// let ob3 =  Object.assign({},ob1,ob2)
// let ob4 = {...ob1,...ob2}

// de-structering
// let {name:nm,branch} = ob1

// console.log(Object.keys(ob1))
// console.log(Object.values(ob1));
// console.log(Object.entries(ob1));
// console.log(nm,branch);

// console.log(ob1.holidays[0]);
// let ob3  = new Object();
// ob3.name="yogi"
// ob3.temp=56
// console.log(ob3);


// let obn = [
//     {

//     },
//     {

//     },
//     {

//     }
// ]



// Array , Object, Function



// function printnname() {
//     console.log('print number function is call');
//     console.log('second statement');
// }


// printnname();

// function addtonumbers(num1,num2) {
 
//     console.log(num1+num2);

// }
// // addtonumbers(22,33)

// function addtwo(num1,num2){
//     return num1+num2
// }

// // console.log(addtwo(2,3))

// function islogin(name="karan"){
//  if(!name){
//     console.log('you are not log in');
//     return
//  }
 
//  return `${name} is log in`
// }

// console.log(islogin(""))


// function addtocart(...num){
//     // console.log(num);
//     return num
// }

// console.log(addtocart(11,22,33,44))




// function objectpass(user){
//         console.log(user);

//         console.log(`My name is ${user.name} and age is ${user.age}`);
// }

// // objectpass(user)

// let numbers = ["banana","apple","mango"]

// function arrasargu(numbers){
//     console.log(numbers);
// }

// arrasargu(numbers)


// Function as expression

// let addton = function(n1,n2){
//     console.log(n1+n2);
// }

// addton(2,4)
// console.log(addton);



// const user = {
//     name:"karan",
//     age:22,
//     greeting:function(){
//         console.log(`wel come to home ${this.name}`);
//     }
// }

// user.greeting()


//   function and expression function


// artih()


// function artih(){
//     console.log('function arith call');
// }

// let add = function(){
//     console.log('add with expression call');
// }

// add()
// IIFE
// ;(function sub(){
//     console.log('sub call');
// })()



//  arrw function

// let adda = ()=>{
//     return `adda is calling`
// }
// let aadb = (num1,num2)=>  (console.log(num1+num2))

// console.log(adda());
// aadb(2,3)


// iife with arraw function
// ;((name)=> (console.log(name)))
// ('karan');








