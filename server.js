const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient


app.use(bodyParser.urlencoded({extended: true}));

var db;
require('dotenv').config();
MongoClient.connect(process.env.MONGO_URI, (err, database) => {
  if(err) return console.log(err)
  db = database;
  app.listen(3000, ()=>{
    console.log('listening on 3000');
  });
});
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  db.collection('edinburgs').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {eclassrooms: result})
  })
});

app.post('/eclassrooms', (req, res) =>{
  db.collection('edinburgs').save(req.body,(err,result) =>{
    if (err) return console.log(err);
    console.log('saved to the database');
    res.redirect('/');
  });
});

// app.listen(3000, function(){
//   console.log('listening on 3000');
// });
