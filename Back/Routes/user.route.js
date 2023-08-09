// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('./models/User');

// const router = express.Router();

// // Route pour l'inscription
// router.post('/signup', async (req, res) => {
//   const { email, password, role } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashedPassword, role });
//     await newUser.save();
//     res.json({ message: 'Utilisateur enregistré avec succès' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
//   }
// });

// // Route pour la connexion
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Adresse e-mail non valide' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Mot de passe incorrect' });
//     }

//     const token = jwt.sign({ userId: user._id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la connexion' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const userCtrl = require('../controllers/user.Ctrl');

// router.post('/api/auth/signup', userCtrl.signup);
// router.post('/api/auth/login', userCtrl.login);

// module.exports = router;