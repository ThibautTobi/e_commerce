import React from 'react';
import '../style/banniere.scss';
import image from '../images';
function Banniere (){

    //intégrer carrousel 
    return(
        <div>
            <img src={image} alt="banniere"></img>
        </div>
    )
}
export default Banniere;