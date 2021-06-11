import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ButtonUp from '../../components/ButtonUp';

import { PAGES } from '../../helpers';

import './style.css';

const About = () => {
  return(
    <>
    <Header page={PAGES.about}/>
    <div className='abouttale'>
      <h4>Jak vznikla tato aplikace?</h4>
      <p>Milé děti, milí dospělí, povím Vám pohádku. Usaďte se a přeji pěkné čtení.</p>
      <p>O Czechitas:</p>
    </div>
    <ButtonUp />
    <Footer fixedbottom={true}/>
    </>
  );
};

export default About;