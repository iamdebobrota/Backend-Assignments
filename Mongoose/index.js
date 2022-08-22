const express= require("express");
const {connection }= require("mongoose");
const {Movie}=require("./db")

const PORT = process.env.PORT || 8080;
const app= express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res)=>{
<<<<<<< HEAD
    res.send(`<h1>Welcome to HomePage </h1>`)
=======
    res.send(`<h1>Welcome to HomePage. this is Mongoose Assignments </h1>`)
>>>>>>> 0549817a21185178f9eb8bd901a4466bd2693569
})


app.get("/movies", async (req,res)=>{
    const params= req.query;
    const movies= await Movie.find(params);
<<<<<<< HEAD

    return res.json(movies);

  
=======
    return res.json(movies);
>>>>>>> 0549817a21185178f9eb8bd901a4466bd2693569
})

app.post("/movies", (req, res)=>{
    const movie=new Movie({...req.body});
    movie.save((err, movie)=>{
        res.json(movie);
    })
})


app.listen(PORT, async ()=>{
    try{
        await connection;
        console.log("Connected to db");

    }catch{

        console.log("Failed to cennec");
    }
    console.log("Server started on http://localhost:8080");
})
