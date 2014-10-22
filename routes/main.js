module.exports = function(app) {

  // Home
  app.get('/', function(req, res) {
    res.render('index');
  });

  // Hello
  app.get('/hello/:name?', function(req, res) {
    res.render('index', {
      name: req.params.name
    });
  });

  // Red theme
  app.get('/red', function(req, res) {
    res.render('index', {
      bodyClass: 'red'
    });
  });

  // Blue theme
  app.get('/blue', function(req, res) {
    res.render('index', {
      bodyClass: 'blue'
    });
  });

};
