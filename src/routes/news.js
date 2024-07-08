import express from 'express';
import newsController from '../app/controllers/NewController.js';

const router = express.Router();

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

// module.exports = router()
export default router;
