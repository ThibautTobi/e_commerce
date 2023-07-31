import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import CountrySelect from '../data/Country';
import '../style/contact.scss';
// import countries from '../data/Country';
// import { Box } from '@mui/material';
import { usePanier } from '../components/UsePanier';

function Contact () {

  const { panierItems } = usePanier();
  console.log(panierItems);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  //const [selectedCountry, setSelectedCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer le formulaire de contact avec les données saisies.
    // ajouter la logique pour envoyer les données du formulaire à votre backend.
    // Une fois que le formulaire est envoyé avec succès, réinitialiser les champs du formulaire.
    setFirstName('');
    setLastName('');
    setEmail('');
    setOrderNumber('');
    setService('');
    setMessage('');
    //setSelectedCountry('');
  };

  const services = [
    { label: 'Commande' },
    { label: 'Après-vente' },
    { label: 'Partenariat' },
    { label: 'Recrutement' },
  ];

  // function CountrySelect() {
  //   return (
  //     <Autocomplete
  //       id="country-select-demo"
  //       sx={{ width: 300 }}
  //       options={countries}
  //       autoHighlight
  //       getOptionLabel={(option) => option.label}
  //       renderOption={(props, option) => (
  //         <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
  //           <img
  //             loading="lazy"
  //             width="20"
  //             src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
  //             srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
  //             alt=""
  //           />
  //           {option.label} ({option.code}) +{option.phone}
  //         </Box>
  //       )}
  //       renderInput={(params) => (
  //         <TextField
  //           {...params}
  //           label="Choose a country"
  //           inputProps={{
  //             ...params.inputProps,
  //             autoComplete: 'new-password',
  //           }}
  //         />
  //       )}
  //     />
  //   );
  // }

  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="firstName">Prénom :</label> */}
          <TextField
            id="firstName"
            label="Non"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            maxLength={30}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="lastName">Nom :</label> */}
          <TextField
            id="lastName"
            label="Prenon"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            maxLength={30}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email :</label> */}
          <TextField
            type="email"
            id="email"
            label="Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={30}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="orderNumber">Numéro de commande :</label> */}
          <TextField
            id="orderNumber"
            label="Numéro de commande"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            maxLength={30}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="service">Service :</label> */}
          <Autocomplete
            id="service"
            label="Services"
            options={services}
            // getOptionLabel={(option) => option.label}
            value={service}
            onChange={(event, newValue) => setService(newValue)}
            renderInput={(params) => (
              <TextField {...params} required />
            )}
          />
        </div>
        {/* <CountrySelect /> */}
        <div className="form-group">
          {/* <label htmlFor="message">Message :</label> */}
          <TextField
            id="message"
            label="Messsage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={4}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="country">Pays :</label> */}
          {/* <CountrySelect
            id="country"
            label='Pays'
            options={countries}
            value={selectedCountry}
            onChange={(newValue) => setSelectedCountry(newValue)}
            required
          /> */}
        </div>
        <Button variant="contained" type="submit">
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default Contact;
