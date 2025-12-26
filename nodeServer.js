const http = require('http');

const server = http.createServer((req, res) => {
    // switch (req.url) {
    //     case '/':
    //         res.end("Home page")
    //         break;
    //     case '/user':
    //         res.end("user page");
    //         break;
    //     case '/about':
    //         res.end("about page");
    //         break;
    //     default:
    //         res.end("page not found");
    //         break;

    // }

    if(req.url === "/"){
        res.end(``);
    }
});

// server.get('/',(req, res)=>{
//     res.send("hello server.....")
// })

server.listen(5000, () => {
    console.log("server is running.....")
}); 