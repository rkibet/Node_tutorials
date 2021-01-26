// //Test CLI with console
// // console.log('hello from Node.js')
// //Person Object
// // const person = require('./person')

// // const Person = require("./person");

// // console.log(person)
// // console.log(person.name)
// // console.log(person.Age)

// //class

// // const person1=new Person('Ronald Kibet',23)


// // person1.greetings()

// // console.log('file path',__filename)
// // console.log('directory part',__dirname)

// // const Logger =require('./logger')

// // const logger =new Logger()

// // logger.on('message',data=>console.log(`Called Listener :`,data))
// // logger.log('Hello World')

// //creatingserver

// const http = require('http')
// const path = require('path')
// const fs =require('fs');
// const { RSA_NO_PADDING } = require('constants');

// const server = http.createServer((req,res)=>{
// //  console.log(req.url);
// if(req.url==='/'){
//     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
//         if(err) throw err;
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(content);
//     })
    
// }

// if(req.url==='/about'){
//     fs.readFile(path.join(__dirname,'public','/about.html'),(err,content)=>{
//         if(err) throw err;
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end(content);
//     })
// }

// if(req.url==='/api/users'){
//     const users=[
//         {name:'Ronald Kibet',age:28}, {name:'Leonard Kimutai',age:9}, {name:'Arnold Kimutai',age:3}
//     ];
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(users))
// }

// let filePath=path.join(__dirname,'public',req.url === '/'? 'index.html':req.url)
// console.log(filePath)
// res.end()

// // let extName=path.extname(filePath)

// // //initial content
// // const contentType='text/html';

// // //check the extension
// // switch(extName){
// //     case '.js':
// //         contentType='text/javascript'
// //         break;
// //     case '.css':
// //         contentType='text/css'
// //         break;
// //     case '.json':
// //         contentType='application/json'
// //         break;
// //     case '.png':
// //         contentType='image/png'
// //         break;
// //     case '.jpg':
// //         contentType='image/jpg'
// //         break;       
// // }

// // fs.readFile(filePath,(error,content)=>{
// // if(error){

// //     if(error.code=='ENOENT'){
// //         fs.readFile(path.join(__dirname,'public','404.html'),(error,content)=>{
// //         res.writeHead(200,{'Content-Type':'text/html'});
// //         res.end(content,'utf8')
// //         })
// //     }else{
// //         res.writeHead(500)
// //         res.end(`Server Error ${error.code}`)
// //     }
// // }else{
// //     res.writeHead(200,{'Content-Type':contentType})
// //     res.end(content,'utf8')
// // }


// // })



// });
// const PORT =process.env.PORT||5000;

// server.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`));