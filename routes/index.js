var express = require('express');
var router = express.Router();
var User = require('./user');
var Comment = require('./comments');
var Bio = require('./bio');



router.get('/',function ( req, res ){
 console.log(req.session.id+ "===============");
  Comment.find( function ( err, comments, count ){
    res.render( 'index', {
        title : 'Comment System with Mongoose and Node',
        comments : comments
    });
  });
}); 

router.post('/create',function ( req, res ){
  new Comment({
    username : req.body.username,
    content : req.body.comment,
    created : Date.now()
  }).save( function( err, comment, count ){
    res.redirect( '/' );
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res) {
    res.render('signup', {message: 'Victory!'})
});

router.post('/signup', function(req, res) {
 User.findOne({'username': req.body.username}, function(err,docs){
        if(docs){
            console.log('already exists' + docs);
            res.send('already in db')

        }else{
        var newUser = new User();
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.save(function(err){
            if(err)
                throw err; 
        });
        res.redirect('/namepass');
        }
    });
});


/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

// router.get('/:username/:password', function(req, res){
//     User.findOne({'username': req.params.username}, function(err,docs){
//         if(docs){
//             console.log('already exists' + docs);
//             res.send('already in db')

//         }else{
//         var newUser = new User();
//         newUser.username = req.params.username;
//         newUser.password = req.params.password;
//         newUser.save(function(err){
//             if(err)
//                 throw err; 
//         });
//         res.send('success!');
//         }
//     });
// });

router.get('/namepass', function(req, res) {
    User.find({}, function(err,docs){
        res.render('namepass', {
            'namepass' : docs
        });
    });
    
});



/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        //else {
            // And forward to success page
          //  res.redirect("userlist");
        //}
    });
});

module.exports = router;
