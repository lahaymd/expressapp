var express = require('express');
var router = express.Router();

var async = require('async');
var Article = require('./article')
var notLoggedIn = require('./not_logged_in');
var session = require('./session');
var loadUser = require('./load_user');
var restrictUserToSelf = require('./restrict_user_to_self');
var loggedIn = require('./logged_in');
var loadArticle = require('./load_article')
var maxArticlesPerPage = 5;

router.all('*', loggedIn)

router.get('/', function(req, res, next){
var page = req.query.page && parseInt(req.query.page, 10) || 0; 
async.parallel([
function(next) { 
	Article.count(next);
},
function(next) { 
	Article.find({})
.sort({title: 1})
.skip(page * maxArticlesPerPage) .limit(maxArticlesPerPage) .exec(next);
} ],
// final callback 
function(err, results) {
if (err) {
return next(err);
}
var count = results[0]; 
var articles = results[1];
var lastPage = (page + 1) * maxArticlesPerPage >= count;
res.render('articles_index', { title: 'Articles',
articles: articles,
page: page,
lastPage: lastPage });
} );
});

router.get('/new', loggedIn, function(req, res) { 
	res.render('articles_new', {title: "New Article"});
});


router.get('/search', function(req, res, next) {
var page = req.query.page && parseInt(req.query.page, 10) || 0;  

	console.log('searching for', req.query.q); 
	Article.search(req.query.q, function(err, articles) {
if (err) {
return next(err);
}
res.render('search_articles', {
title: 'Article search results', 
articles: articles,
page: page,
lastPage: true
}); 
});
});



router.get('/:title', loadArticle, function(req, res, next){ 
	res.render('article', 
		{title: req.article.title,
		article: req.article}); });

router.post('/articles', loggedIn, function(req, res, next) { 
	var article = req.body;
article.author = req.session.user._id;
 Article.create(article, function(err) {
if (err) {
if (err.code === 11000) {
res.send('Conflict', 409); } else {
if (err.name === 'ValidationError') {
return res.send(Object.keys(err.errors).map(function(errField) {
return err.errors[errField].message; }).join('. '), 406);
} else { next(err);
}
}
return; }
res.redirect('/articles'); });
});

router.delete('/:title', loggedIn, loadArticle, function(req, res, next) { 
	req.article.remove(function(err) {
		if (err) { return next(err); }
		res.redirect('/articles'); 
	});
}); 

router.post('/articlesupdate', function(req, res, next) {

	var article = req.body;
	var query = Article.title;

	Article.findOneAndUpdate(query, article, function(err) {
		if (err) {
			return next(err);
		}
		res.redirect('/articles')
	});

});




module.exports = router;