const express = require('express');
const app = express();
const chalk = require('chalk');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;
const absPath = `${ __dirname }/index.html`;

// Middleware
app.use(logger('dev'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(absPath);
});

app.get('/muktek', (req,res) =>{
  res.send('Muktek Academy');
});

// 404
app.use((req, res) => {
  const ERROR = {
    message: '404 Not found.'
  }
  res.json(ERROR).status(404);
  // console.log('404');
});

app.listen(PORT, () =>{
  const msg = chalk.green(`check the port ${ PORT } for more info`);
  console.log(msg);
});

// 500
app.use((req, res) =>{
  const ERROR ={
    message: '500, Server is down.'
  }
  res.json(ERROR).status(500);
});
