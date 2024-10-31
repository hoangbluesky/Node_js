import Course from '../models/Course.js';
import {
    mutipleMongooseToObject,
    mongooseToObject,
} from '../../util/mongoose.js';
class MeController {

    

    // Search page
    storedCourses(req, res,next) {
        Course.find({ deleteAt: null})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

export default new MeController();
