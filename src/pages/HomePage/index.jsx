import React from 'react';
import ButtonTales from '../../components/ButtonTales';
import Descriptions from '../../components/Descriptions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const HomePage = () => {
  return(
    <div>
      <Header />
      <Descriptions />
      <ButtonTales />
      <Footer />
    </div>
  );
};

export default HomePage;