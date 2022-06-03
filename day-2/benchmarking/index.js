const http = require('http')

const fs = require('fs')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const data = fs.readFileSync('./text.txt', { encoding: 'utf-8' })
        res.end(data)
    }
    else if (req.url === '/textasync') {
        fs.readFile('./text.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.end(data)
            }
        })
    }
    
    else if (req.url === '/textpromise') {
        fs.promise.readFile('./text.txt', { encoding: "utf-8" }, (err, data) => {
           if(err){
               console.log(err)
           }else{
               console.log(data);
           }
         }).then((data) => {res.end(data)})
            .catch(err => { res.end(err)})
    }
    else if (req.url === '/textstream') {
        const stream = fs.createReadStream('./text.txt')
        stream.pipe(res)
    }

})
server.listen(8080, () => {
    console.log('http://localhost:8080');
})