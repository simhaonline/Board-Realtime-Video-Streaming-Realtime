function run(app, path){
    let route = "/../public/pages/"

    app.get('/', function(req, res) {
        res.sendFile(path.join(`${__dirname}${route}index.html`));
    });

    app.get('/login', function(req, res){
        res.sendFile(path.join(`${__dirname}${route}login.html`));
    });

    app.get('/teacher', function(req, res){
        res.sendFile(path.join(`${__dirname}${route}teacher.html`));
    });

    app.get('/student', function(req, res){
        res.sendFile(path.join(`${__dirname}${route}student.html`));
    });
    
}

module.exports = {run};