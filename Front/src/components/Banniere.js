import React from 'react';
import '../style/banniere.scss';
import image from '../images/pexels-nandhu-kumar-339614.jpg';
function Banniere (){

    return(
        <div className='display__banniere'>
            <img src={image} alt="banniere" className='display__banniere__image'></img>
        </div>
    )
}
export default Banniere;