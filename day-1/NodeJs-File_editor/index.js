let [node,name,command,file,...args] = process.argv;
const fs = require("fs");

if(command==="write"){
    fs.writeFile(file,args.join(" "),{encoding:"utf-8"},(err,data)=>{
        if(err) {
            console.log(err)
        }
        else{
            console.log("Successfull")
        }
    })
}
else if(command==="read"){
    fs.readFile(file,{encoding:"utf-8"},(err,data)=>{
        if(err) {
            console.log(err)
        }
        else {
            console.log(data)
        }
    })
}
else if(command==="delete"){
   fs.unlink(file, (err) => {
    if (err) {
        throw err
    }
    console.log(`${file} was delete`);
  });
}
else if(command==="append"){
   fs.appendFile(file, args.join(" "), (err) => {
    if (err){
        throw err
    }
    console.log(`${args.join(" ")} is appended`);
  });
}
else if(command==="rename"){
   fs.rename(file, args[0], (err) => {
    if (err){
         throw err
        }
    console.log('Rename successfull');
  });
}