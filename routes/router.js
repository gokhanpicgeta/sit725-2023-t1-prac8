var express = require("express")
//var app = express()
let router = express.Router()
let controller = require('../controllers/controller')

router.post('/api/cat', (req, res, next) => {
    controller.postCat(req, res);
})

router.get('/api/cat', (req, res, next) => {
    controller.getAllCats(req, res)
})

router.get('/', (req, res, next) => {
    controller.getAllCats(req, res)
})


module.exports = router;