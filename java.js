var fs=require('fs');
var http=require('http');



const Server=http.createServer(function (req,res) {
    if(req.url="/"){
        //asy
        fs.readFile('home.html',function (error,data) {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
            
        })
        
    }


});
Server.listen(5050);
//Server.listen(4040);
console.log("server run success");
