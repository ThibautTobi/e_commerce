import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { allProducts, addProduct, updateProduct, deleteProduct } from '../Api/api';
import '../style/adminPage.scss';

function AdminPage() {
  const [productData, setProductData] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    price: 0,
  });

  const [products, setProducts] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleAddProduct = () => {
    addProduct(productData)
      .then((newProduct) => {
        setProducts([...products, newProduct]);
        console.log('Nouveau produit ajouté :', newProduct);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout du produit :', error.message);
      });
  };

  const handleUpdateProduct = () => {
    updateProduct(productData.id, productData)
      .then((updatedProduct) => {
        setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
        console.log('Produit mis à jour :', updatedProduct);
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour du produit :', error.message);
      });
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
        console.log('Produit supprimé avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit :', error.message);
      });
  };

  // Charger les produits depuis le backend au chargement de la page
  useEffect(() => {
    allProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des produits :', error.message);
      });
  }, []);

  return (
    <div className="product-form">
      <Typography variant="h6" component="div" className="form-title">
        Ajouter ou Modifier un produit
      </Typography>
      <TextField
        type="text"
        className="form-input"
        label="ID du produit"
        name="id"
        value={productData.id}
        onChange={handleInputChange}
      />
      <TextField
        type="text"
        className="form-input"
        label="Titre du produit"
        name="title"
        value={productData.title}
        onChange={handleInputChange}
      />
      <TextField
        type="text"
        className="form-input"
        label="Catégorie du produit"
        name="category"
        value={productData.category}
        onChange={handleInputChange}
      />
      <TextField
        type="text"
        className="form-input"
        label="Description du produit"
        name="description"
        value={productData.description}
        onChange={handleInputChange}
      />
      <TextField
        type="number"
        className="form-input"
        label="Prix du produit"
        name="price"
        value={productData.price}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddProduct} variant="contained" className="form-button">
        Ajouter le produit
      </Button>
      <Button onClick={handleUpdateProduct} variant="contained" className="form-button">
        Modifier le produit
      </Button>

      <div className="product-list">
        <Typography variant="h6" component="div" className="list-title">
          Liste des produits
        </Typography>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <span>ID: {product.id}</span>
              <span>Titre: {product.title}</span>
              <span>Catégorie: {product.category}</span>
              <span>Description: {product.description}</span>
              <span>Prix: {product.price}</span>
              <Button onClick={() => handleDeleteProduct(product.id)} variant="outlined" className="delete-button">
                Supprimer
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;