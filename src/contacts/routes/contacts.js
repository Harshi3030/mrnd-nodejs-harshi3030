var express = require('express');
var router = express.Router();
var count=-1;
var data=[];
//var mess=[][];
/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.json(data[req.params.id]);
});

router.post('/', function(req, res, next) {
	count += 1;
	data[count]=req.body;
  res.json(count);
  res.send();

});

router.put('/:id', function(req, res, next) {
  data[req.params.id].firstName=req.body.firstName;
  return res.json(data[req.params.id]);
});
router.put('/:id/:mess',function(req,res,next){
	data[req.params.id].mess=req.params.mess;
	return res.json(data[req.params.id]);
});

module.exports = router;
