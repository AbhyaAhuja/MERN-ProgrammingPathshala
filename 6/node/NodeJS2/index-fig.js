// const figlet = require('figlet')

// figlet('hello !', (err,data)=>{
//     console.log(data);
// })

// _________________________________________________________________

// fetch('https://api.github.com/users/deepak3440').then((res)=>{
//    return res.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log('error')
// })

// ________________________________________________________________

//async await - 
// console.log('start')
// async function getapi(){
//     console.log('api calling')
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     console.log('making json')
//     const data = await pr.json();
//     console.log(':: fetched data');
// }

// getapi();
// console.log('end')
// ______________________________________________________________________________________

// console.log('start')
// async function callAPI(){
//     console.log('api calling')
//     const pr =  new Promise((res,rej)=>{
//         console.log('promise 1 started');
//         setTimeout(()=>{
//             console.log('Timeout 1....')
//         }, 10000);
//     })
//     console.log('promise 1 completed')
// _________________________________________________________________________________________

console.log('start')
async function callAPI(){
    console.log('api calling')
    
    const pr =  await new Promise((res,rej)=>{
        console.log('promise 1 started');
        
        setTimeout(()=>{
            console.log('Timeout 1....')
        }, 10000);
        
    })
   
    console.log('promise 1 completed with await')
}
callAPI();
console.log('end')
// _________________________________________________________________________________________

    // const purr = await new Promise((res,rej)=>{
    //     console.log('promise 2 started');
    //     setTimeout(()=>{
    //         console.log('Timeout 2....')
    //     }, 10000);
    // })
    // console.log('promise 2 completed')
    // const data = await pr.json();
    // console.log(':: fetched data');


// getapi();
