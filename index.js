const http=require('http')
const fs = require('fs')
const path = require('path')
const hostname = 'localhost'
const port = 3000

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)

    if(req.method=='GET')
    {
          if(req.url=='/') 
          fileurl='/index.html'
          else 
          fileurl=req.url

          var filepath = path.resolve('./public'+fileurl)
          const fileExt= path.extname(filepath)
          if(fileExt=='.html')
          {
              fs.exists(filepath,(exists)=>{
                  if(!exists)
                  {
                    res.statusCode=404
                    res.setHeader('content-Type','text/html')
                    res.end(' error 404 not found')
                    return
                  }
                  res.statusCode=200
                  res.setHeader('content-Type','text/html')
                  fs.createReadStream(filepath).pipe(res)

              })
          }
          else
        {
            res.statusCode=404
                    res.setHeader('content-Type','text/html')
                    res.end(' error 404 .Its not Html page')
        }
          

    }
    else
    {
        res.statusCode=404
                    res.setHeader('content-Type','text/html')
                    res.end(' Method Not Suported')
    }
    
})

server.listen(port,hostname,()=>{
    console.log(`server running at ${hostname}:${port} `)
})