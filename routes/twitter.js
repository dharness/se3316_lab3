var express = require('express');
var router = express.Router();

/*
 * GET commentList
 */
router.get('/commentList', function(req, res) {
    var db = req.db;
    db.collection('fuckery').find().toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * POST to addcomment
 */
router.post('/addcomment', function(req, res) {
    var db = req.db;

    db.collection('fuckery').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });

});

module.exports = router;

// ssh://git@gitlab.eng.uwo.ca:995/dharness/se3313-lab3.git