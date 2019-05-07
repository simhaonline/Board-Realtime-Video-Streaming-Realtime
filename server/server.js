function run(app, express){
    app.use(express.static('public'));

    app.get('/', function(req, res) {
      res.send('Home page');
    });

    app.get('/login', function(req, res){
        res.send("Login page")
    });
    
    app.listen(80, function () {
      console.log('Server listening on port 3000!');
    });

}

module.exports = {run};