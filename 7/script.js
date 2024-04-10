
// three types of API in fs:
// 1. Promises 
// 2. Callback
// 3. Synchronous

// to read from a file-

// const data = fs.readFileSync('./info.txt',{encoding:'utf-8'});
// console.log(data);
// // console.log(data.toString());
// ___________________________________________________________________

// to write into a file-

// const data1 = fs.writeFileSync('./logs.txt',"10th April 2024: day 7");
// ___________________________________________________________________

// const fs = require('node:fs');
// console.log("Start");
// const data = fs.readFileSync('./info.txt',{encoding:'utf-8'}); //sync ->synchronous
// console.log(data);
// console.log('end');
// ___________________________________________________________________

// promises in file system

// const fsPromises = require('node:fs/promises');
// console.log("start");
// const pr = fsPromises.readFile('./info.txt',{encoding:'utf-8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })

// console.log("end");

// _________________________________________________________________________

// callback in file system -

// const fs= require('node:fs');
// console.log("start");
// fs.readFile('./info.txt',{encoding:'utf-8'}, (err,data)=>{
//     console.log(data);
// });
// console.log("end");

// ________________________________________________________________________

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     // console.log('Request received  = ', req.url);
    
//     console.log(Object.keys(req)); //after refresh you'll get keys
//     res.end('<h1>hello</h1><h1>there</h1>') 



//     //end - to send response 
//     //imc - by default render, otherwise it would have showed text in end in preformatted form (by def)

//     // res.writeHead(200, {'content-type':'text/html'})
//     //for when we have to explicitly mention type as html
//     //200 here is status code


// });

// server.listen(1400, ()=>{
//     console.log('................Server Started!.................')
// }); //to specify port

// ______________________________________________________________________

//   http://localhost:1400/ - IMP
// 1400: port

// res.end or res.write

// ___________________________________________________________________________

//min project

const http = require('http');
const fs = require('fs')

const data = fs.readFileSync("./data.json","utf-8");

const dataObj = JSON.parse(data);
console.log(dataObj);

const products = dataObj.products;  
console.log(products);

const template = fs.readFileSync('./page.html',{encoding:'utf-8'});
const cardTemplate = fs.readFileSync('./card.html','utf-8')

//obj to string
//string to obj

//products is an array of objects

// const card1 = cardTemplate.replace('Title', products[0].title).replace('info', products[0].description);
// const card2 = cardTemplate.replace('Title', products[1].title).replace('info', products[1].description);
// const card3 = cardTemplate.replace('Title', products[2].title).replace('info', products[2].description);

// const allCards = card1 + card2 + card3; //as are strings

const allCards = products.map((elem)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('Title',elem.title)
    newCard = newCard.replace('info',elem.description)
    return newCard;
})

const allCardsString = allCards.join(' ');
// works on array -> join
const page = template.replace('__PRODUCTS__CARDS__', allCardsString);
const server = http.createServer((req, res)=>{
    console.log(Object.keys(req)); 
    res.end(page); //imp
    

    
    

});

server.listen(1400, ()=>{
    console.log('................Server Started!.................')
});
