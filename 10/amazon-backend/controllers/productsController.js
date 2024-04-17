const getAllProducts = (req,res)=> {
    res.json({
        status: 'success',
        result: 0 ,
        data:{
            products:[],
        }
    })
}

module.exports = {
    getAllProducts,
}