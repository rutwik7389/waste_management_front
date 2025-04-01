const db = require("../db");

const registerUser = (user, callback) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [user.name, user.email, user.password], callback);
};

const getUserByEmail = (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
};

module.exports = { registerUser, getUserByEmail };
