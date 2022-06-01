let cmd = process.argv[2];
const random = require("crypto");


if(cmd==="add"){
    const sum = Number(process.argv[3])+Number(process.argv[4])
    console.log(sum);
}
else if(cmd === "sub"){
    const diff = Number(process.argv[3])-Number(process.argv[4]);
    console.log(diff);
}
else if(cmd === "mult"){
    const pro = Number(process.argv[3])*Number(process.argv[4]);
    console.log(pro);
}
else if(cmd === "divide"){
    const ans = Number(process.argv[3])/Number(process.argv[4]);
    console.log(ans);
}
else if(cmd === "sin"){
    const ans = Math.sin(Number(process.argv[3]));
    console.log(ans);
}
else if(cmd === "cos"){
    const ans = Math.cos(Number(process.argv[3]));
    console.log(ans);
}
else if(cmd === "tan"){
    const ans = Math.tan(Number(process.argv[3]));
    console.log(ans);
}
else if(cmd === "random"){
    console.log(random.randomInt(0,100));
}



