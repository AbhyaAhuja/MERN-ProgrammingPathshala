console.log('hello');
const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./Data.json', 'utf-8');
const dataObj = JSON.parse(data).products;
const cardTemplate = `
<div class='product-card' style="
    
    display:inline-block;
    margin:10px 20px;
    text-align:center;
    padding: 10px 20px;
    background-color:beige;
">
<h4>Title</h4>
<img src="$img_src$" alt="product-image" height="150px" width="200px" />
<br><br>
<a href="$product_links" 
    style="color:white; text-decoration:none; ">
<button style="
    background-color: lightgray;
    text-decoration: none;
    padding:10px;
    border-radius:20px;
    border:none;
    width:100px; 
    cursor:pointer;
">More info</button></a>
</div>`;
let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('Title', dataObj[i].title);
    temp = temp.replace('$img_src$', dataObj[i].images[0]);
    temp = temp.replace('$product_links', `/product?id=${i}`);
    result.push(temp);
}
// console.log(result);
result = result.join(' ')

const server = http.createServer((req, res) => {
    const route = req.url;
    console.log('\n', route, '\n');
    //  const path = url.parse(route);//url.parse(req.url)
    //  console.log('\n',path,'\n');

    const { pathname, query } = url.parse(req.url, true);
    //  {}->destructuring
    // true imp
    //  or
    // const path = url.parse(req.url)
    // const pathName = path.pathname
    // can chnge name here but not in destructuring

    // if(pathName=='/'){
    //         res.end(result);
    //     }
    console.log('\n', query, '\n');

    if (pathname == '/home') {
        res.end(result);
    }
    else if (pathname == '/product') {
        const id = query.id;//id different from the one in json file
        const productData = dataObj[id];
        console.log(productData);
        // res.end('Product page '+ productData.title );
        // res.end(productData.title);
        res.end(`<div style="
                      
                      text-align:center;
                      width:320px;
                      height:500px;
                      margin: 20px auto;
                      border-radius: 8px;
                      padding:17px;
                      text-align:center;
                      background-color: #FEC7B4;
                      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.664); 
                   ">
    <h2>${productData.title}</h2>
    <img src="${productData.images[0]}" style="
                                            margin-top:10px;
                                            border-radius:7px; 
                                            height:150px; 
                                            width:200px;
    "/>

    <h4>${productData.description}</h4>
     
    <h3 style="background-color:white">Price: $${productData.price}</h3> 
    <hr> 
    <h3>Discount: ${productData.discountPercentage}%</h3> 
    <h3>Stock: ${productData.stock}</h3> 
    <h3>Category: ${productData.category}</h3> 
    </div`
        );
    }

    else {
        res.end("404: Error")
    }

});
server.listen(1200);
