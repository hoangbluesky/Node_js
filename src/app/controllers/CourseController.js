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
    // get courses/edit

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next)
        
    }
    //update
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('../me/stored/courses'))
            .catch(next)
    }

    //delete
    destroy(req, res, next) {
        Course.deleteOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

export default new CourseController();
