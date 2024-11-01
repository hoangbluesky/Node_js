import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import methodOverride from 'method-override';
import { engine } from 'express-handlebars';

import { route } from './routes/index.js';
import { connect } from './config/db/index.js';

// Đảm bảo sử dụng __dirname trong ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

connect();

// Middleware để phân tích thân yêu cầu
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));
// Middleware để log các yêu cầu HTTP
app.use(morgan('combined'));

// Middleware để phục vụ các tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // Sửa đường dẫn tới thư mục views

// Các route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
