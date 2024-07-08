import Course from '../models/Course.js';
import {
    mutipleMongooseToObject,
    mongooseToObject,
} from '../../util/mongoose.js';
class SiteController {
    // Home page
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // Search page
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
