import React, { useEffect, useState } from 'react';

import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TalesView from '../../components/TalesView';
import ButtonUp from '../../components/ButtonUp';
import Spinner from '../../components/Spinner';
import { PAGES } from '../../helpers/index.js';

import './style.css';

const ListOfTales = (props) => {

  const [viewTales, setViewTales] = useState(props.appData.fairytales);

  useEffect(
    () => {
      if (!props.appData) {
        fetch('https://nadobrounoc-e4493-default-rtdb.europe-west1.firebasedatabase.app/data.json')
            .then((resp) => resp.json())
            .then((json) => props.setAppData(json))
      }
    }, [props.appData]
);

  return(
    <>
    <Header page={PAGES.listoftales}/>
    {!props.appData ? <Spinner /> :
    <div className='listoftales'>
      <Filter appData={props.appData} setViewTales={setViewTales}/>
      <h4 className='nadpisSeznam'>Seznam všech pohádek</h4>
      <div>
          {viewTales.map((tales) => <TalesView key={tales.id} id={tales.id} name={tales.name} keywords={tales.keywords} text={tales.texttale} img={tales.img}/>)}
      </div>
      <ButtonUp />
    </div>}
    <Footer />
    </>
  )
};

export default ListOfTales;