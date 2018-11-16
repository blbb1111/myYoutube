const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let port = process.env.PORT || 3000;
let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb', parameterLimit: 100000}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`Connecting to Server on port ${port}`);
})