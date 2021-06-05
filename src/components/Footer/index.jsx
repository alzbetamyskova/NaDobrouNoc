import React from 'react';
import './style.css';

const Footer = ({fixedbottom = false}) => {
  return(
    <div className={`footer ${fixedbottom ? 'fixedbottom' : ''}`}>Vytvořeno v rámci Czechitas a.s., © Alžběta Myšková, 2021</div>
  );
};

export default Footer;