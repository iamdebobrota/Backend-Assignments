const fs = require('fs');
const express = require("express");

const cors = require("cors");

const app = express();


app.use(cors())

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get("/",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        res.send(JSON.parse(data));
    })
})

app.post("/",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.todo = [...parsed.todo,req.body];

        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.status(201).send("todo created")
        })
    })
})

app.put("/:id",(req,res)=>{
   
    const {id} = req.params;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.todos.map((el)=>{
            if(el.id==id){
                el.status = req.body.status;
            }
        })
        parsed.todos = [...parsed.todos];

        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.send("todo updated")
        })
    })
})

app.delete("/:id",(req,res)=>{
    const {id} = req.params;
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed = JSON.parse(data);
        // if(!parsed.products.find{(el)=>el.id===id})
        parsed.todos = parsed.todos.filter(el=>el.id != id)

        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.status(200).end("Product Deleted");
        })
    })
});

app.listen(8080,()=>{
    console.log("Server started at port 8080")
})