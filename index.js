const http=require('http')
const hostname = 'localhost'
const port = 3000

const server = http.createServer((req,res)=>{
    console.log(req.headers)
    res.statusCode=200
    res.setHeader('content-Type','text/html')
    res.end('<html><body>hello world</body></html>')
})

server.listen(port,hostname,()=>{
    console.log(`server running at ${hostname}:${port} `)
})