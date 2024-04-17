const express = require('express')
const fsPromises = require("fs/promises");
// const productController = require('./controllers/productsController.js');
// const userController = require('./controllers/usersController.js');
const productRouter = require('./routes/productRoute.js');
const userRouter = require('./routes/userRoute.js')

const app = express();

app.use(express.json()); //middleware to use body

app.use((req,res,next)=>{
    const time = new Date().toLocaleString();
    console.log('request received...');
    fsPromises.appendFile('./log.txt', req.url + '\t' + time + '\n');
    next();
   
})

// const productRouter = express.Router();
// const userRouter = express.Router();

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);
// .get, .post -> handlers.

// productRouter.route('/')
// .get(productController.getAllProducts)
// .post(productController.postProduct)

// productRouter.route('/:id')
// .put(productController.addProduct)
// .delete(productController.delProduct)

// userRouter.route('/')
// .get(userController.getUser)
// .post(userController.postUser)
// .put(userController.putUser)
// .patch(userController.editUser)
// .delete(userController.delUser);


app.listen(1400);

// ________________________________________________________________________________________

// app.route('/api/products')
// .get(productController.getAllProducts)
// .post(productController.postProduct);

// app.route('/api/products/:id')
// .put(productController.addProduct)
// .delete(productController.delProduct);


// app.route('/api/users')
// .get(userController.getUser)
// .post(userController.postUser)
// .put(userController.putUser)
// .delete(userController.delUser)
// .patch(userController.editUser);

// ____________________________________________________________________________________

// app.get('/api/products', productController.getAllProducts);
// app.put('/api/products/:id', productController.addProduct);
// app.post('/api/products', productController.postProduct);
// app.delete('/api/products/:id', productController.delProduct);
// app.get('/api/users', userController.getUser);
// app.post('/api/users', userController.postUser);
// app.put('/api/users', userController.putUser);
// app.delete('/api/users', userController.delUser);
// app.patch('/api/users', userController.editUser);


// ____________________________________________________________________________________________
// app.patch('')
// ____________________________________________________________________________________________

// for alternative routes - we want different response:
// ____________________________________________________________________________________________

// USER GET: 

// app.get('/api/users', (req, res) => {
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:'Route is not yet implemented',
//     });

// })
// app.put('/api/users', (req, res) => {
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:'Route is not yet implemented',
//     });

// })
// app.post('/api/users', (req, res) => {
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:'Route is not yet implemented',
//     });

// })
// app.delete('/api/users', (req, res) => {
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:'Route is not yet implemented',
//     });

    // app.patch('/api/users', async (req, res) => {
    //     res.status(501);
    //     res.json({
    //         status:'fail',
    //         message:'Route is not yet implemented',
    //     });
    
    // })
// })

 



// __________________________________________________________________________

//always use  ===
//cant use send twice. cant use json,send together
//var in route = params (in keys)

// ____________________________________________________________________________

// GET:

// app.get('/api/products', async(req,res)=>{
// const data = await fsPromises.readFile('./data.json', "utf8");
// console.log(data); //was in string -> hence parse
// const arr = JSON.parse(data);
// res.status(200);
// console.log(arr);

// // const obj = JSON.parse(data);
// // res.json(obj)
// res.json({
//     status: 'success',
//     results: arr.length,
//     data: {
//         products: arr,
//     }
// })}
// )

// __________________________________________________________________________________________

// POST:

// app.post('/api/products', async (req, res) => {
//     // console.log(req);
//     // console.log(Object.keys(req));
//     // console.log(req.body);

//     const data = req.body;//as in post we deal w body

//     if(!data.price || !data.title){
//         res.json({
//             status:'fail',
//             message:'Title or price must be provided'
//         });
//     }
//         else{
//             //    __________________________________________
//             // data.id = 121;
//             // console.log(data);
            
//             const db = await fsPromises.readFile("./data.json", "utf-8"); // utf8 would give a string isliye parse
//             const arr = JSON.parse(db);                                   // as json file has an array of objects
//             const len = arr.length;
//             const newProduct = data;
//             if (len == 0) {
//                 newProduct.id = 1;  
//                 // console.log(db);
//                 // arr.push(newProduct);
//                 // console.log(arr);
//                 // fsPromises.writeFile("./data.json",JSON.stringify(arr));
//             }
        
//             else {
        
//                 newProduct.id = (arr[len - 1].id) + 1;
//                 // think
//             }
//             arr.push(newProduct);
        
//             fsPromises.writeFile("./data.json", JSON.stringify(arr));
            
//             res.json({
//                 status: 'success',
//                 results: 1,
//                 data: {
//                     newProduct: newProduct,
//                 }
//             })
        
//     }

// });


// _________________________________________________________________________________________
// PUT:

// app.put('/api/products/:id', async (req, res) => {
//     const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
//     console.log(req);
//     // res.send("...working...") //nec.  to remove as json is also being used
//     const data = req.body;

//     console.log(data);
//     const reqId = parseInt(req.params.id);
//     data.id = reqId;
//     const newarr = arr.map((elem) => {
//         if (elem.id == reqId) return data;
//         else return elem;
//     })
//     fsPromises.writeFile("./data.json", JSON.stringify(newarr));
//     res.json({
//         status: 'success',
//         results: 1,
//         data: {
//             newProduct: data,
//         }
//     })
//     // not necessary to write res.send at the very end of the code, as code would still work just fine-
// })

// ________________________________________________________________________________________________

// DELETE:

// app.delete('/api/products/:id', async (req, res) => {
//     const reqId = parseInt(req.params.id);
//     const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf8"))
//     const newArr = arr.filter((elem) => {
//         if (elem.id === reqId) return false;
//         else return true;
//     });
//     fsPromises.writeFile("./data.json", JSON.stringify(newArr));
//     res.json({
//         status: 'success',
//         data: {
//             newProduct: null,
//         }
//     })
// });


