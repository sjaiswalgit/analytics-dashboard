const {Router} = require('express')
const router = Router() 
const reportController = require('../controllers/reportController')


router.route('/dashboard')
    .get(reportController.getData)




module.exports = router