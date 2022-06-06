var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json())

morgan.token('body',(req)=> JSON.stringify(req.body));

app.use(morgan('METHOD- :method, STATUS- :status, RESPONSE-LENGTH- :res[content-length], TIME_TAKEN- :response-time ms, DATE- :date[clf], HTTP_VERSION- HTTP/:http-version '))
    morgan.token('type', function (req, res) { return req.headers['content-type'] })

app.get("/",(req,res)=>{
    res.send("Hello, My name is Debobrota Haldar")
})

app.post("/post",(req,res)=>{
    res.status(201).send("Post Request Successfull")
})

app.listen(8080,()=>{
    console.log("Server is started at port 8080")
})
