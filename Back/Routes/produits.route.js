const express = require ('express');
const produitsCtrl = require('./controllers/produits.Ctrl');

// ajoute une demande d'authentification avec auth
const auth = require('../middleware/auth');
// gére les fichier images 
const multer = require('../middleware/multer-config');

const router = express.Router();

router.get('/api/produits', produitsCtrl.allProduits);
router.get('/api/produits/:id', produitsCtrl.getOneProduit);
// router.post('/api/produits', auth, multer, produitsCtrlCtrl.addProduit);

module.exports = router;



/****

// router.get('/api/books/bestrating', booksCtrl.bestRating);
// router.put('/api/books/:id', auth, multer, booksCtrl.modifyBook);
// router.delete('/api/books/:id', auth, booksCtrl.deleteBook);
// router.post('/api/books/:id/rating', auth, booksCtrl.addRatingBook);

 */