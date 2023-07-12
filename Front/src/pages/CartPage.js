// import React, { useState } from 'react';
// import { Card,CardActionArea,CardMedia,CardContent,Typography,Button,Popover} from '@mui/material';
// import plantes from '../data/Data';
// import '../style/cartPage.scss';

// function CartPage  () {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handlePopoverOpen = (event, product) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedProduct(product);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//     setSelectedProduct(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div className="product-page">
//       {plantes.map((product) => (
//         <Card
//           key={product.id}
//           className="product-card"
//           onMouseEnter={(e) => handlePopoverOpen(e, product)}
//           onMouseLeave={handlePopoverClose}
//         >
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="140"
//               image={product.image}
//               alt={product.name}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {product.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {product.price}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ))}

//       <Popover
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handlePopoverClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         {selectedProduct && (
//           <div className="product-popover">
//             <Typography variant="h6">{selectedProduct.name}</Typography>
//             <Typography>{selectedProduct.description}</Typography>
//             <Typography>{selectedProduct.price}</Typography>
//             <Button onClick={() => console.log('Ajouter au panier')}>
//               Ajouter au panier
//             </Button>
//           </div>
//         )}
//       </Popover>
//     </div>
//   );
// };

// export default CartPage;

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Collapse } from '@mui/material';
import plantes from '../data/Data';
import '../style/cartPage.scss';

function ProductCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {plantes.map((plante) => (
        <Card key={plante.id} className="product-card">
          <CardMedia className="product-card__media" image={plante.image} title={plante.title} />
          <CardContent className="product-card__content">
            <Typography variant="h6" component="div" className="product-card__title">
              {plante.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div" className="product-card__price">
              {plante.price}
            </Typography>
            <Button onClick={handleExpandClick} variant="outlined" size="small" className="product-card__button">
              Informations
            </Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography variant="body2" color="textSecondary" component="div" className="product-card__information">
                {plante.information}
              </Typography>
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ProductCard;
