let a = new String("Hello");
let b = "Hello";
if (a == b) {
    console.log("Yes")
}

else {
    console.log("No");
}

if (a === b) {
    console.log("Yes")
}

else {
    console.log("No");
}

// ____________________________________________________
// const obj={
//     name:'Ajay',
//     lastName:'Singh'
// }
// ____________________________________________________



// const obj1={
//     "name":"Ajay",
//     "lastName":"Singh"
// }

// const str=JSON.stringify(obj)
// document.write(str);
// to write in the html output window(not console)

const obj = {
    "name": "Ajay",
    "lastName": "Ahuja"
}

// const obj, we can change obj members

// address remains same of the obj

obj.age = 20;
console.log(obj);
// added a new key-value pair

obj.name = 'Abhya';
console.log(obj);
// here the value of key can be changed.



// ______________________________________________________________

// ARRAY:
let arr = [1, 2, 34];
console.log(arr);
arr = [2, 3, 4];
console.log(arr);

//  reassignment allowed, as let

// const arr1=[1,2,34];
// console.log(arr1);
// arr1=[2,3,4];
// console.log(arr1);

// error as reassignment not allowed in the same scope/block - const
// _______________________________________________________________

// INDEXING:

arr[10] = 20;
console.log(arr);

// push method:
arr.push(10);
console.log(arr);
console.log(typeof (arr));
console.log(Array.isArray(arr));
// type of array is also object

console.log(typeof (null)); //object
console.log(typeof (undefined)); //undefined
console.log(typeof (1)); // number

// _______________________________________________________________

// Function to distinguish btwn array and object-
// _______________________________________________________________


function checkIfObject(obj1) {

    if (Array.isArray(obj1) == true) {
        console.log("is an array")
    }

    else if (typeof (obj1) == "object") {
        console.log("is an object")
    }

    else {
        console.log("not an object");
    }
}

checkIfObject([1, 2, 3, 4])
checkIfObject({ "name": "ajay" })
checkIfObject(1)

checkIfObject(Date());
// ________________________________________________________________
const arr2 = ['name', 2];
const obj2 = {
    'name': "ajay", age: 20
};

for (let i = 0; i < 2; i++) {
    console.log(arr2[i]);
}

//  for( i = 0; i<2; i++){
//     console.log(obj[i]);
//  }
//  would throw undefined twice
// obj-> no indexing

for (i of arr2) {
    console.log(i)
}

// for(i of obj2){
//     console.log(i)
// }

// for of loop won't work- as object doesn't have an order and it is not iterable

for (i in obj2) {
    console.log(i)
} // works fine

for (i in arr2) {
    console.log(i)
} // works fine

for (i in obj2) {
    console.log(obj2[i])
}
// to print values by indexing.

for (i in arr2) {
    console.log(arr2[i])
}



// _______________________________________________________________

// forEach():
// array method

// __________________________________________________________________
// DOM: document object model in js thru which we can interact with html

// window (object)-

console.log(window)
console.log(window.innerHeight)
console.log(innerWidth)
// window-> global, works fine w/o writing window with property

// ___________________________________________________________________

console.dir(window)
console.log(window)
// _________________________________

// document.get
let res = document.getElementsByTagName('h1')
console.log(res)
// ___________________________________________________________________
let res1 = document.getElementById('ht1')
let res2 = document.getElementById('t1')

console.log(res1)
console.log(res2)

let res3 = document.getElementsByClassName('hclass')
let res5 = document.querySelectorAll('div>h1')
let res4 = document.querySelectorAll('h1')
// querySelector-> first value that matches
// getElementByName

console.log(res3)
console.log(res4)
console.log(res5)

let result = document.getElementById('ht1').innerHTML = 'JS: Heading has been changed'
// No # in ()

let result1 = document.getElementById('t1')
result1['innerText'] = 'Hello, world'
// result1.innerText='hello'
// works too

// let result2 = document.getElementsByTagName('div')
// result2[0].innerText= "Hello world was changed via tag name's iteration"



let result3 = document.getElementsByTagName('p')

result3[0].innerHTML = 'JS: para has been changed (Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est unde libero ab sit, sed eos nobis exercitationem totam? Maiores non quidem animi corporis!) '

// we cant change tagname of an existing tag via setAttribute

result3[0].setAttribute('class', 'head')
console.log(result3)
// _________________________________________________________________

// To Dynamically Create an element in DOM:

const ne = document.createElement("h3")
ne.innerText = "Dynamic Text"
console.log(ne)

// not in dom yet

// document.body.appendChild(ne);

// __________________________________________________________________

// to append in any specific tag

const firstdiv = document.getElementsByTagName('div')
firstdiv[0].appendChild(ne);

// _____________________________________________________________

// const hidePara = document.getElementById('t1');
// console.log(hidePara)
// // hidePara.innerHTML="";
// // OR
// hidePara.innerText = "";
// _______________________________________________________________
// OR

// const parent = document.getElementById("div1");
// const child = document.getElementById("t1");
// const res = parent.removeChild(child)

// ________________________________________________________________

const hidePara = document.getElementById('t1');
hidePara.remove();