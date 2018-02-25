const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordDigest: {
    type: String,
    required: true
  },
  sessionToken: {
    type: String,
    required: false
  }
});

const User = mongoose.model('User', userSchema);

const saltRounds = 10;
 const hashPassword = (user, callback) => {
   let passwordDigest = '';
   let newUser = new User();
   newUser.email = user.email;
   bcrypt.hash(user.password, saltRounds, function(err, hash) {
     if (err) throw err;
     newUser.passwordDigest = hash;
     newUser.save( (err2, savedUser) => {
       if (err2) throw err2;
       callback(err, newUser);
     });
   });
   return newUser;
 };

 const createUser = (user, callback) => {
   hashPassword(user, callback);
 };

 const getUsers = (callback, limit) => {
   User.find(callback).limit(limit);
 };

 module.exports = {
   createUser: createUser,
   getUsers: getUsers
 };
