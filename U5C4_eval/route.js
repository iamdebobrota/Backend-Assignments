const {Router}=require('express')
const newsRouter=Router()
const {New}=require("./db")
newsRouter.get("/",(req,res)=>{
    res.end("<h1> welcome to News page </h1>")
})
newsRouter.get("/get",async(req,res)=>{
    const {_id,q,location,author,tag,pageSize,pageNo}=req.query

    if(_id){
        const data = await New.find({ _id: _id  });
    res.json(data)
    }
   if(q){
    const data = await New.find({ Title: { $regex: q } });
    res.json(data)
   }
   if(location){
    const data = await New.find({ Location: location  });
    res.json(data)
   }
   if(author){
    const data = await New.find({ Author: author  });
    res.json(data)
   }
   if(tag){
    const data = await New.find({ tags: tag  });
    res.json(data)
   }
   if(pageSize && pageNo){
    const show = pageSize*(pageNo-1);
    const data = await New.find().skip(show).limit(pageSize);
             return res.json(data);
   }
})
newsRouter.post("/new",(req,res)=>{
    const news = new New(req.body);
    news.save((err,news)=>{
        try {
            console.log("data added")
            res.json(news);
        } catch {
            res.send(err);
        }
    })
})


module.exports=newsRouter
