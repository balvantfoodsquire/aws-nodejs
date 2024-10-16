const express = require('express');
const app = express();
const port = 8000
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(bodyParser.json({limit: '50mb'}));


app.use(express.static(path.join(__dirname, 'public')));



app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS')
  next();
});



app.get('/', async (req, res) => {
  res.send('Welcome in aws server');  
});

app.get('/list', async (req, res) => {
    const data = [{
        name : "Balvant Singh",
        Designation : "Senior Software Developer"
    },
    {
        name : "Dipanshu Gupta",
        Designation : "Tech Lead"
    },{
        name : "Akhilesh",
        Designation : "Mobile Tech Lead"
    }]
    res.json({status:true, data});  
  });

app.use(function (err, req, res, next) {
console.error("---",err.message)
res.status(500).send('Something went wrong! '+err.message)
});

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
  });