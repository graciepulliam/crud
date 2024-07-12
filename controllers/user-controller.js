const User = require('../models/User');

exports.getAllUsers = (req, res) => {
    User.getAll((err, users) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving users' });
      }
      res.json(users);
    });
  };
  
  exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getById(userId, (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving user' });
      }
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    });
  };
  
  exports.createUser = (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, userId) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating user' });
      }
      res.status(201).json({ id: userId });
    });
  };
  
  exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    User.update(userId, updatedUser, (err, rowsAffected) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating user' });
      }
      if (rowsAffected === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.sendStatus(204);
    });
  };
  
  exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.delete(userId, (err, rowsAffected) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting user' });
      }
      if (rowsAffected === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.sendStatus(204);
    });
  };
  