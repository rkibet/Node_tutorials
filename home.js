const http = require('http');

const path = require('path');

const fs =require('fs');

const server =http.createServer((req,res)=>{
   

});

const PORT =process.env.PORT||500;

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})