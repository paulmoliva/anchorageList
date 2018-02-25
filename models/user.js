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

 const checkPassword = (user, callback) => {
   User.find({email: user.email}, (err, theUser) => {
     if(err) callback(false);
     else {
       theUser = theUser[0];
       console.log(user.password);
       console.log(theUser.passwordDigest);
       bcrypt.compare(
         user.password,
         theUser.passwordDigest
       ).then(function(res) {
         if(res) {
           callback(true, theUser);
         } else {
           callback(false);
         }
       });
     }
   });
 };

 const getUsers = (callback, limit) => {
   User.find(callback).limit(limit);
 };



 module.exports = {
   User: User,
   checkPassword: checkPassword,
   createUser: createUser,
   getUsers: getUsers
 };
