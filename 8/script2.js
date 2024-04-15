const express = require('express')
const app = express();



app.get('/home',(req,res)=>{
    // res.send('home page')
    // res.send([1,2,3,4])
    res.send('<h2>home get</h2')
})

app.post('/home',(req,res)=>{
    res.send('<h2>home post</h2')
})


app.patch('/home',(req,res)=>{

    res.send('<h2>home patch</h2')
})

app.delete('/home',(req,res)=>{
    
    res.send('<h2>home delete</h2')
})
app.listen(1400);