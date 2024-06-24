import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

// Đảm bảo sử dụng __dirname trong ES6

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//Template
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));  // Sửa đường dẫn tới thư mục views


app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
