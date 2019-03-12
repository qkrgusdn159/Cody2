var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/send_img', function(req, res, next) {
    var inputdata;
    req.on('data', (data) => {
        inputdata = JSON.parse(data);
    });
    req.on('end', () => {
        console.log(inputdata);
        res.send('respond with a resource');
    });
});

module.exports = router;