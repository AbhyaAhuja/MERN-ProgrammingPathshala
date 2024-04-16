const express = require('express')
// const fs = require('fs')

const fsPromises = require("fs/promises");
const app = express();
app.use(express.json());

// ____________________________________________________________________________________________

app.get('/api/products', async (req, res) => {
    // const data = fs.readFileSync('./data.json',"utf-8")

    const data = await fsPromises.readFile('./data.json', "utf8");
    console.log(data); //was in string -> hence parse
    const arr = JSON.parse(data);
    console.log(arr);

    // const obj = JSON.parse(data);
    // res.json(obj)
    res.json({
        status: 'success',
        results: arr.length,
        data: {
            products: arr,
        }
    })


    console.log("...server started...")
})

// __________________________________________________________________________________________

app.post('/api/products', async (req, res) => {
    // console.log(req);
    // console.log(Object.keys(req));
    // console.log(req.body);

    const data = req.body;//as in post we deal w body

    if(!data.price || !data.title){
        res.json({
            status:'fail',
            message:'Title or price must be provided'
        });
    }
        else{
            //    __________________________________________
            // data.id = 121;
            // console.log(data);
            
            const db = await fsPromises.readFile("./data.json", "utf-8"); // utf8 would give a string isliye parse
            const arr = JSON.parse(db);                                   // as json file has an array of objects
            const len = arr.length;
            const newProduct = data;
            if (len == 0) {
                newProduct.id = 1;  
                // console.log(db);
                // arr.push(newProduct);
                // console.log(arr);
                // fsPromises.writeFile("./data.json",JSON.stringify(arr));
            }
        
            else {
        
                newProduct.id = (arr[len - 1].id) + 1;
                // think
            }
            arr.push(newProduct);
        
            fsPromises.writeFile("./data.json", JSON.stringify(arr));
            
            res.json({
                status: 'success',
                results: 1,
                data: {
                    newProduct: newProduct,
                }
            })
        
    }

});

// __________________________________________________________________________________________

app.put('/api/products/:id', async (req, res) => {
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
    console.log(req);
    // res.send("...working...") //nec.  to remove as json is also being used
    const data = req.body;

    console.log(data);
    const reqId = parseInt(req.params.id);
    data.id = reqId;
    const newarr = arr.map((elem) => {
        if (elem.id == reqId) return data;
        else return elem;
    })
    fsPromises.writeFile("./data.json", JSON.stringify(newarr));
    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct: data,
        }
    })
    // not necessary to write res.send at the very end of the code, as code would still work just fine-
})

// ___________________________________________________________________________________________

app.delete('/api/products/:id', async (req, res) => {
    const reqId = parseInt(req.params.id);
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf8"))
    const newArr = arr.filter((elem) => {
        if (elem.id === reqId) return false;
        else return true;
    });
    fsPromises.writeFile("./data.json", JSON.stringify(newArr));
    res.json({
        status: 'success',
        data: {
            newProduct: null,
        }
    })
});

app.listen(1400);
//always use  ===
//cant use send twice. cant use json,send together
//var in route = params (in keys)
