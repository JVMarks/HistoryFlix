import React from 'react';
import Logo from '../../assets/img/logo.png';

import './styles.css';
import Button from '../Button/index'
//import ButtonLink from '../components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu" >
      <a href="/">
        <img className="Logo" src={Logo} alt="JubileuFlix Logo" />
      </a>
    
    <Button as="a" className="ButtonLink" href="/">
      Novo Vídeo
    </Button>
    </nav>
  );
}

export default Menu;