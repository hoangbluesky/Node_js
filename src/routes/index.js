import newsRouter from './news.js';
import coursesRouter from './courses.js';
import siteRouter from './site.js';

export function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    //   app.post('/search', (req, res) => {
    //     //console.log(req.body); Sẽ hiển thị giá trị thân yêu cầu trong console
    //     res.send('');});
}
