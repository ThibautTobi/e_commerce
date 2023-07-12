
/***** alternative rassembler les fonctionnalités****/

// import { useContext } from 'react';
// import { PanierContext } from './PanierContext';

// export function addToCart(cartItem) {
//   const { cartItems, setCartItems } = useContext(PanierContext);
//   const updatedCartItems = [...cartItems, cartItem];
//   setCartItems(updatedCartItems);
// }

// export function removeFromCart(cartItemId) {
//   const { cartItems, setCartItems } = useContext(PanierContext);
//   const updatedCartItems = cartItems.filter((item) => item.id !== cartItemId);
//   setCartItems(updatedCartItems);
// }

// export function updateCartItemQuantity(cartItemId, quantity) {
//   const { cartItems, setCartItems } = useContext(PanierContext);
//   const updatedCartItems = cartItems.map((item) => {
//     if (item.id === cartItemId) {
//       return { ...item, quantity };
//     }
//     return item;
//   });
//   setCartItems(updatedCartItems);
// }

// export function clearCart() {
//   const { setCartItems } = useContext(PanierContext);
//   setCartItems([]);
// }
