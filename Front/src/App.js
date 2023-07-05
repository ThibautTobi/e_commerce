import React, { useContext } from 'react';
import { ThemeContext } from './components/Theme';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
// import Error from './pages/Error';
//import { Routes,Route } from 'react-router-dom';
import './style/app.scss';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Header />
      <HomePage />
      {/* <Routes>
          <Route exact path="/Home" element={<HomePage />}/>
          <Route path="*" element={<Error />}/>
        </Routes> */}
      <Footer />
    </div>
  );
}

export default App;