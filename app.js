const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("Hii")
})

app.listen(3000,()=>{
    console.log('listening on 3000')
})
