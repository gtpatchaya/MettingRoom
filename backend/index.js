const express = require('express');
const server  = express();
const PORT = 3000;

server.get('/getdata',(req,res) => {
    res.json({messgage : 'Backed Server is Started'})
});

server.listen(PORT , () => console.log('Server is started='+PORT))