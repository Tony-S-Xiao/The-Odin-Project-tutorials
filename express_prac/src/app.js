let express = require('express')
let app = express();
let port = 8080;
let fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('./about-me.html', (err, data)=>{
        if(err)
        res.status(404).send('404');
        res.send(data);
        
    })
});
app.listen(port, ()=>{console.log('wow')});