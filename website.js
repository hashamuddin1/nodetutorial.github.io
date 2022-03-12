const http = require('http');

const fs = require("fs");

const port = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // res.end("<h3>THIS IS HASHAM UDDIN</h3>");
    if (req.url == "/") {
        res.statusCode = 200;
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.end("<h3>THIS IS ABOUT PAGE</h3>");
    } else if (req.url == "/help") {
        res.statusCode = 200;
        res.end("<h3>THIS IS HELP PAGE</h3>");
    } else {
        res.statusCode = 404;
        res.end("<h3>PAGE IS NOT FOUND</h3>");
    }
})

server.listen(port, () => {
    console.log(`SERVER IS LISTENING ON PORT ${port}`);
})