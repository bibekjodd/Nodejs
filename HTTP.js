// Node.js provides capabilities to create your own web server which will handle 
// HTTP requests |asynchronously|

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/')
        res.end("Hello from the other end of the server\nOkay fine now\nAnother line break");
    else if (req.url == '/contact')
        res.end("Hello from the contact page");
    else if (req.url == '/about')
        res.end("This is about page");
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        // res.writeHead({"Content-type":"text/html"});
        res.write("404 Error\n");
        res.write("okay this is another line\n");
        res.write("\n<h1>Hello world</h1>");
        res.end();
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("yes it's working on the console as well");
});