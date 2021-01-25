//Test CLI with console
// console.log('hello from Node.js')
//Person Object
// const person = require('./person')

// const Person = require("./person");

// console.log(person)
// console.log(person.name)
// console.log(person.Age)

//class

// const person1=new Person('Ronald Kibet',23)


// person1.greetings()

// console.log('file path',__filename)
// console.log('directory part',__dirname)

// const Logger =require('./logger')

// const logger =new Logger()

// logger.on('message',data=>console.log(`Called Listener :`,data))
// logger.log('Hello World')

//creatingserver

const http = require('http')
const path = require('path')
const fs =require('fs')

const server = http.createServer((req,res)=>{
//  console.log(req.url);
if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Home Page</h1>')
}
});
const PORT =process.env.PORT||5000;

server.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`));