let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
  let new_url = req.url;
  if('.' + new_url == './')
  new_url = './index.html';
  else
  new_url = '.' + new_url + '.html';
  console.log(new_url);
  fs.readFile(new_url, (err, data)=>{
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);