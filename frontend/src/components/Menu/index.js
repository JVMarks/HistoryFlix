import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

import './styles.css';
import Button from '../Button/index';
//import ButtonLink from '../components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu" >
      <Link to="/">
        <img className="Logo" src={Logo} alt="JubileuFlix Logo" />
      </Link>
    
    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo Vídeo
    </Button>
    </nav>
  );
}

export default Menu;