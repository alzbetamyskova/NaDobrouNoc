import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TalesView from '../../components/TalesView';
import { PAGES } from '../../helpers/index.js';
import data from '../../assets/database.json';

const ListOfTales = () => {

  return(
    <>
    <Header page={PAGES.listoftales}/>
    <Filter />
    <div>
      {data.fairytales.map((tales) => <TalesView key={tales.id} name={tales.name} keywords={tales.keywords} text={tales.texttale}/>)}
    </div>
    <Footer />
    </>
  )
};

export default ListOfTales;