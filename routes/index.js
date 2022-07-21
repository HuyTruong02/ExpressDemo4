var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var year = 2002;
  var sinhviens = ['tien','truong','long','phong','dung'];
  res.render('index', { title: 'Express',
  nam : year,
    studens : sinhviens

  });
});
router.get('/',function (req, res) {
  res.render('index.ejs');
})
module.exports = router;
