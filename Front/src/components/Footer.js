import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import '../style/footer.scss';

function Footer (){
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <footer>
            <div className="display">
                <button onClick={toggleTheme}>Change de Theme</button>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;