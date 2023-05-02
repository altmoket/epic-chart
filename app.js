

const { Console } = require('console');
const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'src', 'public')))
app.use(express.static('dist', {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.js')) {
        res.set('Content-Type', 'text/javascript');
      }
    }
  }));

app.listen(3000, () => {
    console.log('Server started on port 3000');
    console.log('Entra a http://localhost:3000');
})
