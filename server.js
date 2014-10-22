var express = require('express');
var expressHbs = require('express-handlebars');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express();
var hbs = expressHbs({
	extname: '.html',
	defaultLayout: 'default.html',
	layoutsDir: __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials'
});
app.engine('html', hbs);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/assets/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/main')(app);

// Catch 404 errors
app.use(function(req, res, next){
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
		res.render('errors/404', { url: req.url });
		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.send({ error: 'Not found' });
		return;
	}

	// default to plain-text. send()
	res.type('txt').send('Not found');
});

app.set('port', process.env.PORT || 8082);
console.log('Starting on port ' + app.get('port'));
app.listen(app.get('port'));
