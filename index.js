// index.js
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  var a =6
  var b= 6
  var c = a+b
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
