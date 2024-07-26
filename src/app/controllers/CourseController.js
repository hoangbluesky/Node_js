import Course from '../models/Course.js';
import {
    mutipleMongooseToObject,
    mongooseToObject,
} from '../../util/mongoose.js';
class CourseController {

    // show page /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
            .then((course) => {
                res.render('courses/show',{ course: mongooseToObject(course)} );
            })
            .catch(next);

        
    }
    // get courses/create
    create(req, res, next) {

        res.render('courses/create')
    }
    // POST courses/store
    store(req, res, next) {
        // res.json(req.body)
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }
}

export default new CourseController();
