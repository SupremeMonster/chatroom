var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/room/:id', function(req, res, next) {
  res.render('index',{title:'chatroom'});
});

module.exports = router;
