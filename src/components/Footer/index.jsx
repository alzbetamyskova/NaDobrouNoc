import React from 'react';
import './style.css';

const Footer = ({fixedbottom = false}) => {
  return(
    <div className={`footer ${fixedbottom ? 'fixedbottom' : ''}`}><p>Vytvořeno v rámci Czechitas z.s., © Alžběta Myšková, 2021</p></div>
  );
};

export default Footer;