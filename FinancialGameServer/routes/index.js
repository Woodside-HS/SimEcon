var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //res.render('index', { title: 'Express' });
  res.status(200);
  
  res.send('{"status":"200","message":"Express loaded"}');
});

module.exports = router;
