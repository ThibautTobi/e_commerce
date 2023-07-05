import '../style/error.scss';
import { Link } from 'react-router-dom';

function Error(){
    return(
        <div className='erreur'>
            <h2 className='erreur_h2'>404</h2>
            <p className='erreur_p'>Oups! La page n'existe pas :/ </p>
            <Link to=".." relative='path' className='erreur_link'>Retourner sur la page d’accueil</Link>
        </div>
    )
};
export default Error;