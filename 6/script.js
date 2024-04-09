// console.log('start')

// setTimeout(()=>{
//     console.log('Timeout...')},0);
// console.log('intermediate')
// console.log('end')

// start
// intermediate
// end
// timeout...

// _________________________________________________________________

// console.log('start')

// setTimeout(()=>{
//     console.log('Timeout `1...')},9000);
// console.log('start')

// setTimeout(()=>{
//     console.log('Timeout `2...')},5000);
// console.log('intermediate')
// console.log('end')

// ______________________________________________________________________

// function createOrder(x, fn){
//     console.log(x);
//     setTimeout(fn('li1234'),1000);
// }

// function makePayment(orderId){
//     console.log(orderId);
// }

// createOrder('soap',makePayment);

// _____________________________________________________________________

// PROMISES -

// const pr = new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(resolve("abhya"), Math.random()%10*1000);
//     }

//     else{
//         reject();
//     }
// });

// ______________________________________________________________

// setTimeout(()=>{console.log('first timeout...')},0)

// const pr = new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(reject("rejected"), Math.random()%10*1000);
//     }

//     else{
//         reject();
//     }
// });

// console.log(pr);

// pr.then((res)=>{
//     console.log(res); //undefined: as resolve's value not defined
// }).catch((err)=>{
//     console.log(err)
// })

// setTimeout(()=>{console.log(pr)})

// ________________________________________________________________

// setTimeout(()=>{console.log('first timeout...')},0)

// const pr = new Promise((resolve,reject)=>{
    
//         setTimeout(()=>{
//             reject("out of stock");
//         },0)
    
// });

// setTimeout(()=>{
//     console.log('first setTimeout')
// },0)
// // console.log(pr);

// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })

// ____________________________________________________________________________

setTimeout(function abc(){
    console.log('I am one');
},0);
const pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('done')
    },0);
})

pr.then(function b(res){
    console.log("promise completed: ",res);

});

setTimeout(function xyz(){
    console.log("I am two")
},0);