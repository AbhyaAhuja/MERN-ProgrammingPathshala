console.log('hello')
const arr = [10,22,34]

const ans = arr.forEach((a)=>{
    console.log(a);
})

console.log(ans);
// as forEach() won't make a new array hence it returns nothing
// map altho would return a new array

const answer = arr.map((a)=>{
    console.log(a) 
    return a*2
})

console.log(answer)

// map(a=>a**2) - shorthand
const arr4=[10.11,22.54,4.67]
const arr3 = arr4.map(a=>Math.floor(a)) 
console.log(arr3)

// parseInt works the same

// ______________________________________________________________________
// Filter:

const arr5 = [10,22,34]
const arr6= arr5.filter((a)=>{
    if(a>20) return true;
    else return false;
})

console.log(arr6)

// _____________________________________________________________________

const arrray = [
    'Delhi',
    'Mumbai',
    'Chennai',
    'Kolkata',
    'Pune',
    'USA'
]

// contains -

// includes -
const anss= arrray.filter((s)=>{
    if(s.includes('i')||s.includes('I')){
        return true;
    }
    else{
        return false; 
    }
})

console.log(anss);

// ___________________________________________________________________

// console.log("harsh".includes('h'))

// console.log("HArsh".toLowerCase().includes('harsh'))

// const arr = ans.filter((a)=>a.toLowerCase().includes('india'))
// _________________________________________________________________

// REDUCE()-

const red = [2,3,4,5,6];

const an = red.reduce((a,b,c,d)=>{
    console.log(a,b,c,d)
    return a+b;
})


// last step didn't show up on the console 

// as

console.log(an);
// ________________________________________________________________

const redd = ['ab','cd','xy','z'];
const ann = redd.reduce((a,b,c,d)=>{
    console.log(a,b,c,d)
    return a+b;
})
console.log(ann);

