var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   article1 :{
    title:'Article-one',
    heading:'Introduction',
    date:'17/02/2017',
    content:
    ` <div>
           <p>hai this is my first article 1 html file</p>
       </div>
       <div>
            <p>hai this is my first article 1 html file,hai this is my first article 1 html file</p>
            
             <p>hai this is my first article 1 html file--hai this is my first article 1 html file</p>
             
              <p>hai this is my first article 1 html file</p>
       </div>`
},
    article2 : {
    title:'Article-two',
    heading:'Introduction',
    date:'17/02/2017',
    content:
    ` <div>
           <p>hai this is my first article 2 html file</p>
       </div>
       <div>
            <p>hai this is my first article 2 html file,hai this is my first article 2 html file</p>
            
             <p>hai this is my first article 2 html file--hai this is my first article 2 html file</p>
             
              <p>hai this is my first article 2 html file</p>
       </div>`},
    article3 : {
        title:'Article-three',
    heading:'Introduction',
    date:'17/02/2017',
    content:
    ` <div>
           <p>hai this is my first article 3 html file</p>
       </div>
       <div>
            <p>hai this is my first article 3 html file,hai this is my first article 3 html file</p>
            
             <p>hai this is my first article 3 html file--hai this is my first article 3 html file</p>
             
              <p>hai this is my first article 3 html file</p>
       </div>`
    }
};




function createpage(data)
{
   var title=data.title;
   var heading=data.heading;
   var date=data.date;
   var content=data.content;
    
    var htmltemplate=
   ` <!DOCTYPE html>
    <head>
        ${title}
        <meta name="viewport" content="width=device-width , initial-sacle=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
       <a href='/'>HOME</a>
       
       <hr/>
       
       <div>
          ${heading}
       </div>
       <div>
          ${date}
       </div>
       <div>
            ${content}
       </div>
       </div>
    </body>
    
</html>
`;
 return htmltemplate;   
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter = 0;
app.get('/counter',function(req,res){
   counter = counter +1;
   res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createpage(articles[articleName]));
});
app.get('/article2',function(req,res){
    res.send(createpage(article2));
});
app.get('/article3',function(req,res){
      res.send(createpage(article3));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names=[];
app.get('/submitform/:name',function(req,res){
    var name = req.params.name;
    names.push[name];
   // JSON javascript object notation
    res.send(JSON.stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
