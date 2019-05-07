const sqlite3 = require('sqlite3').verbose();

function login(name, pass){
    var db = new sqlite3.Database('./db/database.db');
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, pass VARCHAR)");
        db.each(`SELECT name FROM Users WHERE (name='${name}' AND pass='${pass}')`, function(err, row) {
            if(err) return err
            console.log(row)
        })
    });   
}

module.exports = {
    login
}