import React from 'react';
import ButtonTales from '../../components/ButtonTales';
import Descriptions from '../../components/Descriptions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { PAGES } from '../../helpers/index.js';
import './style.css';

const HomePage = () => {
  return(
    <div>
      <Header page={PAGES.home}/>
      <Descriptions />
      <ButtonTales />
      <Footer />
    </div>
  );
};

export default HomePage;