var express = require('express');
var router = express.Router();
var User = require('./user');
var Comment = require('./comments');

router.get('/',function ( req, res ){
 console.log(req.session.id+ "===============");
  Comment.find( function ( err, comments, count ){
    res.render( 'index', {
        title : 'Mike La Hay\'s Express Blog',
        comments : comments,
        name : req.session.username
    });
  });
}); 

router.get('/background',function ( req, res ){
 res.render( 'background-attachment'); 
});



router.post('/create',function ( req, res ){
  new Comment({
    username : req.session.user.name,
    content : req.body.comment,
    created : Date.now()
  }).save( function( err, comment, count ){
    res.redirect( '/' );
  });
});


router.get('/lost', function(req, res) {
    res.render('lost')
})



// router.get('/signup', function(req, res) {
//     res.render('signup', {message: 'Victory!'})
// });

// router.post('/signup', function(req, res) {
//  User.findOne({'username': req.body.username}, function(err,docs){
//         if(docs){
//             console.log('already exists' + docs);
//             res.send('already in db')

//         }else{
//         var newUser = new User();
//         newUser.username = req.body.username;
//         newUser.password = req.body.password;
//         newUser.save(function(err){
//             if(err)
//                 throw err; 
//         });
//         res.redirect('/namepass');
//         }
//     });
// });




// router.get('/namepass', function(req, res) {
//     User.find({}, function(err,docs){
//         res.render('namepass', {
//             'namepass' : docs
//         });
//     });
    
// });




module.exports = router;