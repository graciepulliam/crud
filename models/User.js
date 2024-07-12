const express = require('express');
const db = require('../server/db');

class User{
    static getAll(callback){
        db.query('SELECT * FROM users', (err, result) => {
            if(err){
                return callback(err, null);
            }
            callback(null, result);
        });
    }
    static getById(id,callback){
        db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
            if(err){
                return callback(err, null);
            }
            callback(null, result[0]);
        });
    
    }
    static create(newUser, callback){
        db.query('INSERT INTO users SET ?', [newUser], (err, result) => {
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }
    static update(id,updatedUser, callback) {
        db.query('UPDATE users SET ? WHERE id = ?', [updatedUser,id], (err, result) => {
            if(err){
                return callback(err, null);
            }
            callback(null, result.affectedRows)
        });
    }
    static delete(id, callback) {
        db.query('DELETE FROM users WHERE id = ?', [id],(err, result) => {
            if(err) {
                return callback(err, null);
            }
            callback(null, result.affectedRows);
        });
    }
}

module.exports = User;