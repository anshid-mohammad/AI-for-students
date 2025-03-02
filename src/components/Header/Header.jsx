import React, { useState } from 'react';
import logo from '../../assets/aifer-logo.svg';
import styles from './Header.module.css';
import EnrollPopup from '../EnrollNowPopup/EnrollPopup';

const Header = () => {
     const [isPopupOpen, setIsPopupOpen] = useState(false);
    
      const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
    
    return (
        <header className={styles.header}>
            <nav className={`navbar shadow-sm ${styles.navbar}`}>
                <div className="container-fluid px-md-5 d-flex align-items-center justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Aifer" className={`d-inline-block align-text-top ${styles.brand}`} />
                    </a>

                    <button onClick={togglePopup} className={`${styles.joinBtn} position-absolute ml-auto end-0  me-3`}>
                        Join Now 
                    </button>
                </div>
            </nav>
            {isPopupOpen && <EnrollPopup toggleModal={togglePopup} />}

        </header>
    );
};

export default Header;
