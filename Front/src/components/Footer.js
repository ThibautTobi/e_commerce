import React, { useContext,useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
import { ThemeContext } from './Theme';
import '../style/footer.scss';
// import logo from '../images/';

function Footer (){
    const { theme,toggleTheme } = useContext(ThemeContext);
    const [email, setEmail] = useState('');

    const [checked, setChecked] = useState(theme === 'dark');

    const handleToggle = () => {
      setChecked(!checked);
      toggleTheme();
    };
    /**** gestion du mailing newsletter*****/
    // Fonction pour gérer le changement de la valeur de l'input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer l'adresse e-mail vers le backend pour l'enregistrer dans la base de données

    // Réinitialisez la valeur de l'input après l'envoi
    setEmail('');
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

    return (
        <footer className={`footer ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <div className="footer__display">
                <div className="footer__display__first">
                    {/* <button onClick={toggleTheme}>Mode nuit</button> */}
                    <FormControlLabel
                    control={<MaterialUISwitch
                        checked={checked}
                        onChange={handleToggle}
                        sx={{ m: 1 }}
                      />}
                    />
                    <div>
                    <h3>Nous retrouver</h3>
                    <ul>
                        {/* icone réseaux sociaux */}
                        <li></li>
                    </ul>
                    <ul>
                        <li>Champ de Mars, 5 Av. Anatole France, 75007 Paris</li>
                        <li>Du Lundi au Samedi</li>
                        <li>de 9h à 12h et 13h30 à 19h</li>
                        {/* inséré adresse google maps */}
                    </ul>
                </div>
                <div>
                    <h3>Newsletter</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                        Adresse e-mail:
                        <input type="email" value={email} onChange={handleEmailChange} />
                        </label>
                        <button type="submit">S'inscrire</button>
                    </form>
                </div>
                </div>
                <div className="footer__display__second">
                    {/* <div>
                        <img src={logo} alt='logo' className="footer__logo">logo</img>
                    </div> */}
                    <div>
                        <h3>Partenaires</h3>
                        <ul>
                            <li>Le vendeur de chapeau</li>
                            <li>La vendeuse de robe</li>
                            <li>le vendeur de bijoux </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;