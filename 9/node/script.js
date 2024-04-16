console.log('hello');
const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./data.json', 'utf-8');
const dataObj = JSON.parse(data).products;
// outer cards
const cardTemplate = `


<div class='product-card' style="
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.384); 
    margin:10px 20px;
    text-align:center;
    padding: 10px 20px;
    background-color:beige;
">
<h4>Title</h4>

<img src="$img_src$" alt="product-image" height="150px" width="200px" />

<br><br>

<a href= "$product_links" 
    style="color:white; text-decoration:none;">

<button style="
    background-color: lightgray;
    text-decoration: none;
    padding: 10px;
    border-radius: 20px;
    border: none;
    width: 100px; 
    cursor: pointer;
">
More info
</button>
</a>

<h4>$price</h4>

</div>`
    ;
let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('Title', dataObj[i].title);
    temp = temp.replace('$img_src$', dataObj[i].images[0]);
    temp = temp.replace('$product_links', `/product?id=${i}`);
    temp = temp.replace('price', dataObj[i].price);
    result.push(temp);
}
// console.log(result);
result = result.join(' ')

const server = http.createServer((req, res) => {
    const route = req.url;
    console.log('\n', route, '\n');
    const { pathname, query } = url.parse(req.url, true);

    //  const path = url.parse(route); //url.parse(req.url)
    //  console.log('\n',path,'\n');
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
    res.writeHead(200, { 'content-type': 'text/html' })
    // content-type input for search as render ni horha tha

    if (pathname == '/home') {
        const searchBar = `
            <header style="padding-top:20px; min-width:100%; text-align:center;">
            <form action='/product'>

            <input type="text" name="productName" style="width:300px; padding-left:10px;" placeholder="Search" />
            
            <button type="submit" >Search</button>
            </form>
            </header>
            </br>`;
        res.end(searchBar + `<div style="display: grid;
                                    grid-template-columns: 1fr 1fr 1fr ;
                                    column-gap: 15px;
                                    row-gap: 5px; 
                                    ">` + result + `</div>`);

    }
    else if (pathname == '/product') {
        const id = query.id;//id different from the one in json file
        const pName = query.productName;
        if (id) {

            const productData = dataObj[id];
            console.log(productData);
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
            </div>`
            );
        }
    
        else if(pName){
            const searchNameResults = dataObj.filter((elem)=>{
                if(elem.title.includes(pName)){
                    return true;
                }
                else{
                    return false;

                }
            })
                res.end(JSON.stringify(searchNameResults))
        }
        else {
            res.end("404: Error")
        }

}
}
);
server.listen(1000);

// join, stringify