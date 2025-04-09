import Navbar from './Navbar'; 
import React, { useContext } from 'react';
import { ThemeContext } from '../components/Theme';
import '../style/header.scss';

function Header() {
  // Ont utilise le hook useContext pour accéder à la valeur actuelle du thème depuis le contexte
  const { theme } = useContext(ThemeContext);

  /*
  L'utilisation de useContext ici est idéale car elle permet d'obtenir la valeur du thème
  sans avoir à passer manuellement la prop depuis un parent. 
  Cependant, useContext ne déclenche un re-render que si la valeur du contexte change, 
  ce qui est bien pour les performances.
  */

  return (
    // On applique dynamiquement une classe CSS différente en fonction du thème.
    // Si le thème est "dark", on applique la classe "dark-theme", sinon "light-theme".
    <header className={`header ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Navbar />
    </header>
  );
}

/*
Optimisation potentielle :

Ici, le composant Header n'a pas de lourdes opérations à faire. 
Cependant, si le composant Navbar devait effectuer des calculs lourds ou s'il y avait des conditions 
plus complexes basées sur des props ou des états, on pourrait envisager d'utiliser useMemo ou React.memo.

- `useMemo` : Peut être utilisé si on a des valeurs dérivées (calculs ou transformations de données) 
  qui ne devraient pas être recalculées à chaque re-render.
- `React.memo` : Si on veut éviter le re-render de Navbar, on peut encapsuler ce composant avec React.memo, 
  surtout s'il ne dépend pas de changements fréquents.
  Par exemple : const MemoizedNavbar = React.memo(Navbar);

*/

export default Header;