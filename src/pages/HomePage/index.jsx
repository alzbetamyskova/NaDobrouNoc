import React from 'react';

import ButtonTales from '../../components/ButtonTales';
import Descriptions from '../../components/Descriptions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import { PAGES } from '../../helpers/index.js';

import './style.css';

const HomePage = ({appData}) => {
  return(
    <>
    <Header page={PAGES.home}/>
    <div className='homepage'>
      <Descriptions />
      {!appData ? <Spinner heightauto={true}/> : 
      <div>
        <ButtonTales appData={appData}/>
      </div>}
    </div>
    <Footer />
    </>
  );
};

export default HomePage;