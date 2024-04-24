const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
            type: Number,
            required:true,
    
    },
    description: String,
    images:[String],
    createdAt:{
        type: Date,
        default: new Date(),
    }
})

const productModel = mongoose.model('Products', productSchema);

// const testProduct = new productModel({
//     title:'Casio Watch',
//     price: 1000,
// });

// testProduct.save().then((res)=>{
//     console.log(res);
// })

module.exports = productModel;
