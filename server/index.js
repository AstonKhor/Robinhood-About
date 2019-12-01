const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const Company = require('../database/Company.js')

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/about/:id', function(req, res) {
    var id = req.params.id;
   Company.findById(id, (err, result) => {
       if (err) {
           console.log(err)
       } else {
           res.send(result);
       }
   })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
