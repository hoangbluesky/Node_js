import express from 'express';
import siteController from '../app/controllers/SiteController.js';

const router = express.Router();

router.get('/search', siteController.search);
router.get('/home', siteController.index);
router.get('/', async (req, res) => {

    res.status(201).render('login');
})
router.post('/login', async (req, res) => {
    const {userName, password} = req.body;
    // so sanh userName vaf password vowis trong db

    

    return res.status(201).json({
        userName: userName,
        password: password
    })
})

// module.exports = router()
export default router;
