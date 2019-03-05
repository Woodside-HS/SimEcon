var express = require('express');
var router = express.Router();

var admin = require('firebase-admin');
var serviceAccount = require('../econsim-81c1e-firebase-adminsdk-kb5oz-bba23d4a29.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://econsim-81c1e.firebaseio.com'
});


var db = admin.firestore();

/**
 * Get student data given a student id
 */
router.get('/channel/:channel/get/student/:studentid', function(req,res,next){
    res.send(`{"status":"works","channel":${req.params.channel},"studentID":"${req.params.studentid}"}`);
});

/**
 * Update student data
 */
router.post('/channel/:channel/updateStudent/:studentid', function (req, res){
    res.status(200);
    var body = req.body;

    res.send(`{"status":"works","channel":${req.params.channel},"studentID":"${req.params.studentid}"}`);

    //res.send(req.body.message);
});

/**
 * Create a channel
 */
router.post('/new/channel/',function(req,res){
    //res.send("WORKS");
    //res.send(`${req.query.id}`);

    var data = {
        id: `${req.query.id}`,
        name: `${req.body.name}`,
        author: `${req.body.author}`
    };
    db.collection('channel').doc(`${req.query.id}`).set(data).then(function(){
        res.status(200);
        res.send("Data updated");
    }).catch(function(error){
        res.status(500);
        res.send(error);
    });
});




router.get('/', function(req, res, next) {

  //res.render('index', { title: 'Express' });
  res.status(404);
  
  res.send('{"code":"404","message":"Index reached... please define a route"}');
});

module.exports = router;
