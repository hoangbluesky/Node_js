import newsRouter from './news.js';
import siteRouter from './site.js';

export function             route(app) {
                app.use('/news', newsRouter);
                        app.use('/news', newsRouter);
                            app.use('/', siteRouter);

    //   app.post('/search', (req, res) => {
    //     //console.log(req.body); Sẽ hiển thị giá trị thân yêu cầu trong console
    //     res.send('');});
}
