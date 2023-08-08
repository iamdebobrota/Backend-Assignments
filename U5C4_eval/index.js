const express = require("express");
const {New,connection} = require("./db");
const newsRouter=require("./route")
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1> hello, Welcome to home page</h1>")
})
app.use("/news",newsRouter)

app.listen(PORT,async ()=>{
    try {
        await connection;
        console.log("Connected to db");
    } catch {
        console.log("Failed to connect")
    }
    console.log("Server started at port http://localhost:8080")
})