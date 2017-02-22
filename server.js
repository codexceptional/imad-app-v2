var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var students={
shubham:{
    name:'Shubham Goel',
    dept:'Information Technology',
    roll:'62',
    colg:'Jadavpur University'
},

krishna:{
    name:'Krishna Agarwal',
    dept:'Computer Science',
    roll:'24',
    colg:'Kalyani Eng.'
},

imam:{
    name:'Imam Khan',
    dept:'Civil Engineering',
    roll:'10',
    colg:'Techno India'
}
};

app.get('/ui/:varName', function (req, res) {
   var name=students[varName[name]];
 var colg=students[varName[colg]];
 var dept=students[varName[dept]];
 var roll=students[varName[roll]];
  res.send(`<!doctype html>
<html>
    <head>
        <title>
            ${name}
        </title>
        <link href="style.css" rel='stylesheet'>
    </head>
    <body>
        <div class='container' id='para' style='text:center'>
            <h1>
                Personal Credentials.
            </h1>
            <hr/>
            <ul>
                <li>
                    Name:<span id='name'>${name}</span>
                </li>
                <li>
                    College:<span id='college'>${colg}</span>
                </li>
                <li>
                    Department:<span id='dept'>${dept}</span>
                </li>
                <li>
                    Roll no. <span id='roll'>${roll}</span>
                </li>
            </ul>
        </div>
    </body>
</html>
`);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/article-one.html', function (req, res) {
  res.send('Hey!this article-one');
});

app.get('/ui/article-two.html', function (req, res) {
  res.send('Hey!this article-two');
});

app.get('/ui/article-three.html', function (req, res) {
  res.send('Hey!this article-three');
});

app.get('/ui/shubham.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shubham.html'));
});

app.get('/ui/imam.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imam.html'));
});

app.get('/ui/krishna.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'krishna.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
