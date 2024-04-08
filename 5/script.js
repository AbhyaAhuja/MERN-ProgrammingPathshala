let arr = [2,10,21,31];
// function printArray(arr){
//     for(let i =0; i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }

function printPretty(elem){
    console.log(': ',elem);
}
// arr.forEach(printPretty);

function printArray(arr){
    for(let i =0; i<arr.length;i++){
                printPretty(arr[i]);
            }
        
            arr.forEach(printPretty);
}


printArray(arr);

// ________________________________________________


//             arr.forEach((a,b,c)=>{
 //            console.log(a,b,c)
//               });

//             arr.map((a,b,c)=>{
//             console.log(a,b,c)
//               });
// 

// ___________________________________________________

function printPrtty(elem){
    console.log('hello');
}
setTimeout(printPrtty,10000)