let express = require('express')
let app = express();
let port = 8080;
let fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('./about-me.html', (err, data)=>{
        if(err)
        res.status(404).send('404');
        res.status(200).set('Content-Type', 'text/html');
        res.send(data);
    })
});
app.get('/contact', (req, res) => {
    fs.readFile('./contact.html', (err, data)=>{
        if(err)
        res.status(404).send('404');
        res.status(200).set('Content-Type', 'text/html');
        res.send(data);
    })
});

app.get(/.*/, (req, res) => {
    fs.readFile('./404.html', (err, data)=>{
        res.status(404).set('Content-Type', 'text/html').send(data);
    })
});
app.listen(port, ()=>{console.log('wow')});