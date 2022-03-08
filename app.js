const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req,res){
    res.send('<h1> EXpress demo app </h1><h4> Message: Success </h4><p> Version 1.0</p>');
})

app.get('/products',function(req,res){
    res.send([
        {
            productId: "1001",
            price: 200

    },
    {
        productId: "1002",
        price: 250
    }
])
})

app.listen(port,function(error){
    if(error){
        console.log('Error while starting the server',error)
    }
    else{
        console.log('Server is up and running on port:' + port)
    }
})