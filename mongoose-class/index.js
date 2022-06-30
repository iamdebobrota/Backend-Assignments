const express = require('express');
const app =express();

const {connection, StudentModel} = require('./db')
app.use(express.json());


app.get('/students', async (req, res)=>{
    // const params = req.query;
    // console.log(params);
    // const result= await StudentModel.find();
    // const result= await StudentModel.find(params, {_v : 0}).limit(3);
    

    //when i make the request in frontend http://localhost:8080/students/?pageNo=1&&perPage=3
    const {pageNo, perPage} = req.query;
    const result= await StudentModel.find({}, {_v : 0}).skip((pageNo-1)*perPage).limit(perPage);
    res.send(result)
    // console.log(result);
})

app.post('/students',async (req, res)=>{
    const result = await StudentModel(req.body);
  await  result.save()
    res.send(result)
})


app.listen(8080, async ()=>{
    try{
        await connection;
        console.log("connection successfully");

    }catch(err){
        console.log("failed to connect to database");
    }
    console.log("server started on 8080");
})






