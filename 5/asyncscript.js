




// // console.log('GEC Start')

// function printPrtty(){
//     console.log('prettySTart')
//     let ans = 2+3;

//     console.log(ans);
//     console.log('prettyend');
// }
// // setTimeout(printPrtty,10000)

// // console.log('GEC end')
// // _________________________________________________
// const btn= document.getElementById('btn');
// btn.addEventListener('click', printPrtty);
// // click, not onclick

// _________________________________________________

// FETCH - 

// console.log('start') 
// const req= fetch("https://api.github.com/users/deepak3440")
// console.log(req) 
// req.then(()=>console.log('fetched'))
// console.log('end')
// __________________________________________________

console.log('start')

// OG CODE:
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then((data)=>console.log(data));

// this works fine!->
fetch('htps://dummyjson.com/products/1')
    .then(res => res.json()).then((data) => console.log(data)).catch((err) => {
        console.log(err);
    })
// .then(json => console.log(json))
// or

// const req = fetch(' ')
// const res = req.then(res=>res.json())
// res.then((data)=>console.log(data))
// important
// req = promise

console.log('end')


// // const res = req.then((res)=>{
//      res.json();
//    })
// wont work as arrow function is not returning anything

// _________________________________________________

// to catch error:
//  so that no error goes unhandled

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then((data)=>console.log(data))
// .catch(err);

