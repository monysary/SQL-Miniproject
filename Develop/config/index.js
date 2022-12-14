const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Whitebutterfly!0",
    database: "movies_db"
});

module.exports = db