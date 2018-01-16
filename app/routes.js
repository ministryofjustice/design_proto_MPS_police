var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})
// add your routes here
// router.get('/risk_01', function (req, res) {
//   myFunction();
//   res.render('risk')
// })

module.exports = router
