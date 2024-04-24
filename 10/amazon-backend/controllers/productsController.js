const productModel = require('../models/productsModel.js');


const getAllProducts = async (req,res)=> {
    // const {sort, ...q} = req.query;
    const {sort = 'price', page = 1, pageSize =3, fields = '-price', ...q} = req.query;
    let query = productModel.find(q);
    let skip = pageSize*(page-1);
    query = query.sort(sort.split(',').join(' '));
    
 //def values for avoiding error
    // console.log(q,sort)
    
    // console.log(q); //obj
    // query = query.sort(sortStr);
    // const limit = 3;
    query = query.skip(skip).limit(pageSize);//first sort then offset limit
    // query = query.select("-title")
    //removes title
    const fieldStr = fields.split(',').join(' ');
    query = query.select(fieldStr)
    // query = query.sort(sortStr);
    const totalResults = await productModel.countDocuments();
    const products = await query;
    //think
    console.log(req.url);
    res.json({
        status: 'success',
        result: products.length ,
        data:{
            products,
            // as array of objects=>data
            //if in es6 key and value has the same name this works fine
        },
        totalResults: totalResults,
        pageSize: pageSize,
        page: page
    })
}

const addProduct = async (req,res)=> {
    try{
    const{_id, ...reqData} = req.body;
    const data = await productModel.create(reqData);
    console.log(req.body);
    res.json({
        status:'true',
        results:1,
        data:{
            products:data,
        }
     });
    }
    catch(err){
        console.log(err);
        res.json({
            status:'false',
            message: JSON.stringify(err)
         });
    }
}

const replaceProduct = async (req,res)=> {
    try{
    const reqId = req.params.id;
    // const data = req.body;
    // data[_id] = reqId; // this wouldn't work but why? idk.
    const data = {...req.body, _id: reqId}//careful
    const result = await productModel.findOneAndReplace({_id:reqId} , data); //careful
    res.json({
        status:'true',
        results:1,
        data:{
            products:result, //careful
        }
     });
 }


catch(err){
    res.status(500);
    res.json({
        status:'false',
        message: JSON.stringify(err)
     });
}

}

const  delProduct = async (req,res)=>{
    try{
        const reqId = req.params.id;
        const result = await productModel.findOneAndDelete({_id:reqId});
        // const data = await productModel.find();
        res.json({
            status:'true',
            results:1,
            data:{
                products:result,
            }
         });

    }
    catch(err){
        res.status(500);
        res.json({
            status:'false',
            message: JSON.stringify(err)
         });
        }
}

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    delProduct
}
