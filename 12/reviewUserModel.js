const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,

    },

    email:{
        type: String,
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        // lowercase: true,
        required: true,
        unique: true,

    },

    userPic:{
        type: String,
    }
})

const userModel = mongoose.model('Users', userSchema);


const testUser = new userModel({
    name:'Abhya Ahuja',
    email: 'abhyaahuja@gmail.com',
    userPic: 'sjasdgydgsyvx'
})

testUser.save().then((res)=>{
    console.log(res);
})


const testUser0 = new userModel({
    name:'Abhya Ahuja',
    email: 'abhyaahuja@gmail.com',
    userPic: 'sjasdgydgsyvx'
})

testUser0.save().then((res)=>{
    console.log(res);
})

const testUser1 = new userModel({
    name:'Abhya Ahuja',
    email: 'abhyaahuja@gmail.com',
    userPic: 'sjasdgydgsyvx'
})

testUser1.save().then((res)=>{
    console.log(res);
})

const testUser2 = new userModel({
    name:'Abhya Ahuja',
    email: 'abhyaahuja@gmail.com',
    userPic: 'sjasdgydgsyvx'
})

testUser2.save().then((res)=>{
    console.log(res);
})


const reviewSchema = mongoose.Schema({
    description: {
        type: String,
        required:true,
    },
    titleOfProduct: {
        type: String,
        required:true,

    },

    rating : Number,

    createdOn:{
        type: Date,
        default: new Date(),
    },

    updatedOn:{
        type: Date,
        default: new Date(),
    }

 })

 const reviewModel = mongoose.model('Reviews', reviewSchema);

 const testreview = new reviewModel({
   description: "good product",
   titleOfProduct:"Juicer",
   rating: 4,
   createdOn: 21/10/2002,
   updatedOn: 21/10/2012,
   
})


testreview.save().then((res)=>{
    console.log(res);
})

const testreview0 = new reviewModel({
    description: "needs improvement",
    titleOfProduct:"Microwave",
    rating: 2,
    createdOn: 11/10/2002,
    updatedOn: 11/10/2012,
    
 })
 
 
 testreview0.save().then((res)=>{
     console.log(res);
 })


 const testreview1 = new reviewModel({
    description: "good product",
    titleOfProduct:"Phone",
    rating: 4,
    createdOn: 21/11/2002,
    updatedOn: 21/10/2012,
    
 })
 
 
 testreview1.save().then((res)=>{
     console.log(res);
 })


 const testreview2 = new reviewModel({
    description: "okok",
    titleOfProduct:"Lamp",
    rating: 3,
    createdOn: 11/10/2002,
    updatedOn: 21/11/2012,
    
 })
 
 
 testreview2.save().then((res)=>{
     console.log(res);
 })
// module.exports = {userModel, reviewModel};