// // Middleware pour gérer l'autorisation en fonction du rôle
// const checkRole = (requiredRole) => {
//     return (req, res, next) => {
//       const userRole = req.userData.role; // Supposons que vous stockez les informations utilisateur dans req.userData
  
//       if (userRole === requiredRole) {
//         next(); // L'utilisateur a le rôle requis, continuez
//       } else {
//         res.status(403).json({ message: 'Accès non autorisé' }); // L'utilisateur n'a pas le bon rôle
//       }
//     };
//   };
  
//   // Exemple d'utilisation du middleware pour restreindre l'accès aux administrateurs
//   router.get('/admin-only', checkRole('admin'), (req, res) => {
//     res.json({ message: 'Bienvenue dans la zone d\'administration' });
//   });
  
//   // Exemple d'utilisation du middleware pour restreindre l'accès aux utilisateurs
//   router.get('/user-only', checkRole('user'), (req, res) => {
//     res.json({ message: 'Bienvenue dans la zone utilisateur' });
//   });
  