const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: 'user', // Le rôle
    default: 'user', // Par défaut, l'utilisateur a le rôle 'user' si il y en avait plusieurs voir si ajout admin et plus
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

// const userShema = mongoose.Schema({
//     email : {type: String , required: true, unique:true },
//     password : {type: String , required: true},
// });

// /****  j'ajoute le plugin pour étre sur que "unique" sera bien unique dans la base de donnés ****/
// userShema.plugin(uniqueValidator);

// module.exports = mongoose.model('user', userShema);