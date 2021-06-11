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
    <div className='homepage'>
      <Header page={PAGES.home}/>
      <Descriptions />
      {!appData ? <Spinner /> : 
      <div>
        <ButtonTales appData={appData}/>
      </div>}
      <Footer fixedbottom={true}/>
    </div>
  );
};

export default HomePage;