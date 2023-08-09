// function cartReducer (state, action) {
//   console.log('Current state:', state);

//   switch (action.type) {
//     case 'ADD_TO_CART':
//       console.log('Current items:', state.items);
//       console.log('Adding plant:', action.payload);
//       return {
//         ...state,
//         items: [...state.items, action.payload], /// probleme ici
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload.id),
//       };
//     case 'UPDATE_QUANTITY':
//       return {
//         ...state,
//         items: state.items.map(item => {
//           if (item.id === action.payload.id) {
//             return { ...item, quantity: action.payload.quantity };
//           }
//           return item;
//         }),
//       };
//     case 'CLEAR_CART':
//       return {
//         ...state,
//         items: [],
//       };
//     default:
//       return state;
//   }
// }

// export default cartReducer;