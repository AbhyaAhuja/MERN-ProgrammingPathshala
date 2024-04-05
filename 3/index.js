var message="hello"

console.log(message);


// ex of loosely typed:
var age = 19;
age = "abhya";
console.log(age);

// ____________________________________________

// alert("Alert!")

msg='without var'
console.log(msg)
// ______________________________________________

// Data type:
// changing DT
let var1='20';
console.log(typeof(var1))
// _______________________________________________

// ARRAY:
let arr=['a','b','c','d','e']
console.log(arr)
arr[0]='abcd'
console.log(arr)
// ________________________________________________
// TYPE-COERCION
let str='12'
let agee=20
let ans=agee+str;
console.log(ans)
// 2012
let answer=str+agee;
console.log(answer)
// 1220
console.log(20*'12')
// 240
console.log('12'*'12')
// 144

console.log(12+'abhya'+12)
// 12abhya12

let ans2=agee-(-str)
console.log(ans2)
// 32
// ____________________________________________
let a='12'
let b=12
if(a==b){
    console.log('yes')
}

else{
    console.log('no')

}

if(a===b){
console.log('yes again');
}

else{
    console.log('no again');
}
// __________________________________________

let c=['a','b','c','d'];
let d=[...c];
// spread
console.log(c,d);

if(c==d){
    console.log('1.yes')
}

else{
    console.log('1.no')

}

if(c===d){
console.log('yes again');
}

else{
    console.log('no again');
}

// ________________________________________

const name='Khan'
const name1=`My name is ${name}`;

console.log(name1)

// _________________________________________

// FUNCTION:

function print(x="default"){
    console.log(x);
}

const s='hello there'
print(s)
print()


function sum(a,b){
    if(a && b){
        console.log(a+b)
    }
    else{
        console.log(a)
    }
}

sum(20)
sum(10,20)
// _____________________________________________

// ARROW FUNCTION:

//function declaration:
function printt(){
    console.log('--');
}

// meth 2: FUNCTION ASSIGNMENT
let func = function printt(){
    console.log('--');
}

//meth 3: ANONYMOUS FUNCTION //funciton name removed 
let func2 = function (){
    console.log('--');
}

//meth 4: ARROW FUNCTION 
let func3 = ()=>{
    console.log('--');
}

printt();
func();
func2();
func3();

// ______________________________________________
// CONDITIONAL STATEMENTS:
// if-else
// switch
// ternary?

let ab=2
switch(a){
case 1:{
    console.log('one');
break;
}

case 2:{
    console.log('two');
    break;
}

case 3:{
    console.log('three');
    break;
}

default:{
    console.log('not 1,2,3')
}
}

// _______________________________________________

// OBJECT:

const obj = new Object();
obj[12]='twelve';
obj[2]='two';
console.log(obj)
const val = obj[12]+' '+obj[2];

console.log(val);
// or
// const obj = {};
// obj[12]='twelve';
// obj[2]='two';
// console.log(obj)

// or
// const obj = {
// 1:'twelve',
// 'name'='two',
// 12:'twelve
// };

// console.log(obj)
// _______________________________________________________________
// PROMPT:
let xx=prompt("enter first name");
console.log(xx);

let px=prompt("enter the object's number(could be 12 or 2)");
console.log(px);
console.log(obj[px]);
