const http = require('http')

const path = require('path')

const fs = require('fs');

const server = http.createServer((req,res)=>{

//     //Loading Home Page
//    if(req.url==='/'){
//       fs.readFile(path.join(__dirname,'public','index.html'),(error,content)=>{
//           if(error) throw error;
//           res.writeHead(200,{'Content-Type':'text/html'});
//           res.end(content)
//       });
//    }
// //Loading About Page
//    if(req.url ==='/about'){
//        fs.readFile(path.join(__dirname,'public','about.html'),(error,content)=>{
//            if(error) throw error;
//            res.writeHead(200,{'Content-Type':'text/html'});
//            res.end(content)
//        })
//    }

//    //making apis

//    if(req.url==='/api/users'){
//        const users=[
//            {name:'Ronald Kibet',age:28},{name:'Leonard Kimutai',age:10},{name:'Arnold Kimutai',age:3}

//        ]
//        res.writeHead(200,{'Content-Type':'application/json'});
//        res.end(JSON.stringify(users))
//    }


let filePath =path.join(__dirname,'public',req.url=== '/'?'index.html':req.url);

// console.log(filePath)
// res.writeHead(200,{'Content-Type':'text/html'})
// res.end()

let extName =path.extname(filePath);

let contentType='text/html';

switch(extName){
    case '.js':
        contentType='text/javascript';
    break;
    case '.css':
        contentType='text/css';
    break;
    case '.jpeg':
        contentType='image/jpg';
    break;
    case '.png':
        contentType='image/png';
    break;
    case '.json':
        contentType='application/json';
    break;    
}

fs.readFile(filePath,(error,content)=>{

    if(error){
        if(error.code =='ENOENT'){
            //page not found
            fs.readFile(path.join(__dirname,'public','404.html'),(err,cont)=>{

                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(cont,'utf8');
            })
        }
        else{
            res.writeHead(500);
            res.end(`Server Error ${error.code}`);
        }
    }
    else{
        res.writeHead(200,{'Content-Type':contentType})
        res.end(content,'utf8')

    }
});



});



const PORT =process.env.PORT||5000;

server.listen(PORT,()=>{console.log(`Server running on Port: ${PORT}`)})