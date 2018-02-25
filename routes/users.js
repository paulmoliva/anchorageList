const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/', (req, res) => {
  user.getUsers((err, users) => {
    if(err) {
      throw err;
    }
    res.json(users);
  });
});

router.post('/signup', (req, res) => {
  const userJSON = req.body;
  user.createUser(userJSON, (err, newUser) =>{
    if(err){
      throw err;
    }
    res.send(newUser);
  });
});

module.exports = router;
