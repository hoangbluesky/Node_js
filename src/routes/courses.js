import express from 'express';
import courseController from '../app/controllers/CourseController.js';

const router = express.Router();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show);

// module.exports = router()
export default router;
