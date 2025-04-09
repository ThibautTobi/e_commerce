const User = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userCtrl = {
  signup: async (req, res) => {
    try {
      const { email, password } = req.body;

      console.log(email);
      console.log(password);

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
      }

      // Hashage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log(hashedPassword);

      // Création d'un nouvel utilisateur
      const newUser = new User({ email, password: hashedPassword });
      console.log(newUser);

      await newUser.save();

      res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (error) {
      console.error(`Erreur lors de l'enregistrement de l'utilisateur:`, error);
      res.status(500).json({ message: `Erreur lors de l'enregistrement de l'utilisateur` });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      console.log(email);
      console.log(password);

      // Vérifier si l'utilisateur existe
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Utilisateur non trouvé' });
      }

      // Vérifier le mot de passe
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Mot de passe incorrect' });
      }

      // Créer et envoyer le token JWT
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });//// importer du .env la key 
      res.json({ token });
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
  },
};

module.exports = userCtrl;





// const User = require('./models/user');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const userCtrl = {
//   signup: async (req, res) => {
//     try {
//       const { email, password } = req.body;

//       // Vérification si l'utilisateur existe déjà
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
//       }

//       // Hashage du mot de passe
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Création d'un nouvel utilisateur
//       const newUser = new User({ email, password: hashedPassword });
//       await newUser.save();

//       res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
//     } catch (error) {
//       res.status(500).json({ message: `Erreur lors de l'enregistrement de l'utilisateur` });
//     }
//   },

//   login: async (req, res) => {
//     try {
//       const { email, password } = req.body;

//       // Vérification si l'utilisateur existe
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(401).json({ message: 'Utilisateur non trouvé' });
//       }

//       // Vérification du mot de passe
//       const isPasswordCorrect = await bcrypt.compare(password, user.password);
//       if (!isPasswordCorrect) {
//         return res.status(401).json({ message: 'Mot de passe incorrect' });
//       }

//       // Création et envoi du token JWT
//       const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
//       res.json({ token });
//     } catch (error) {
//       res.status(500).json({ message: 'Erreur lors de la connexion' });
//     }
//   },
// };

// module.exports = userCtrl;






// const userShema = require('../models/user.model');

// /**********  module hash mot de passe **********/
// const bcrypt = require('bcrypt');

// /**********  création token **********/
// const webToken = require('jsonwebtoken');

// /**********  module verification email valide **********/
// const emailValidator = require('email-validator');

// /**** création d'une couche de securité ****/
// require('dotenv').config();

// /***************************************** authentification utilisateur *************************************/

// /************* ajout utilisateur a la base de donnés et hachage du mot de pass(crypto)  **************/
// exports.signup = (req, res ,next) => {     
//     const email = req.body.email;
//     const password = req.body.password;
    
//     // Vérification de l'email valide
//     if (!emailValidator.validate(email)) {
//         return res.status(400).json({ message: "Email invalide" });
//     }

//     // Vérification de la complexité du mot de passe , ici 8 caractéres dont 1 chriffre et 1 caractére speciales
//     const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
//     if (!passwordRegex.test(password)) {
//         return res.status(400).json({ message: "Le mot de passe doit avoir au moins 8 caractères, inclure au moins 1 chiffre et 1 caractère spécial" });
//     }

//     bcrypt.hash(req.body.password, 10)
//         .then(hash => {
//             const user = new userShema({
//                 email: req.body.email,
//                 password: hash
//             });
//             user.save()
//             .then(() => res.status(201).json({ message : 'utilisateur créé !'}))
//             .catch(error => res.status(400).json({ error }));
//         })
//         .catch(error => res.status(500).json({ error }));
// };

// /** helmet vol de session et cookie faire test pour étre certain pour les images / **/

// /************* identification et verification utilisateur , renvoi id utilisateur et un token web json  contenant id utilisateur **************/
// exports.login = (req, res ,next) => {
//     // recherche de l'utilisateur par sont email grace a findOne
//     userShema.findOne({email: req.body.email})
//         .then(user => {
//             if(user === null){
//                 // si l'email n'est pas trouvé
//                 res.status(401).json({ message : 'identifiant ou mot de passe incorrecte'});
//             } 
//             else {
//                 //comparaison entre le mot de passe fournie et celui de la base de donnés
//                 bcrypt.compare(req.body.password, user.password)
//                 .then(valid => {
//                     if(!valid) {
//                         res.status(401).json({ message : 'identifiant ou mot de passe incorrecte'})
//                     } 
//                     else {
//                         res.status(200).json({
//                             userId: user._id,
//                             // création du token avec jsonwebtoken expiration au bout de 24h
//                             token: webToken.sign(
//                                 { userId: user._id },
//                                 process.env.SECRET,
//                                 { expiresIn: '24h' }
//                             )
//                         });
//                     }
//                 })
//                 .catch(error => { res.status(500).json({ error })});
//             }
//         })
//         .catch(error => {res.status(500).json({ error })})
// }; 