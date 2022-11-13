// Each type of stream is an eventemitter intance 
// data - fired when data is available to read
// end - fired when there is no more data
// error - fired when there is any error in receiving or writing data
// finish - fired when all event has been flushed to underlying system

const fs = require('fs');
const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.writeHead(200,{'content-type':"text/html"})
//         res.write("This is the homepage\n");
//         res.end();
//     }
//     else {
//         req.write("404 Error\n");
//         res.end();
//     }
// })
// server.listen(3000, "127.0.0.1");

const server = http.createServer();
server.on('request', (req, res) => {
    // normal way 
    // fs.readFile('input.txt', (err, data) => {
    //     if (err)
    //         return console.log(err);
    //     console.log(data.toString());
    // });
    // res.end("hello");


    // rstream method 
    // const rstream = fs.createReadStream('input.txt');
    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on('end', () => {
    //     res.end();
    // });

    // rstream.on('error', (err) => {
    //     console.log(err);
    //     res.end("File not found");
    // })



    // stream pipe method 
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
    rstream.on('error',(err)=>{
        console.log(err);
        res.end("File not found");
    })

});

server.listen(3000, "127.0.0.1");