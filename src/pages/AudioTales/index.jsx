import React, { useEffect } from 'react';

import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';
import { PAGES } from '../../helpers';

import './style.css';

const AudioTales = (props) => {

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
      <Header page={PAGES.audiotales}/>
      <div className='audiotales'>
        {!props.appData ? <Spinner /> :
        <div>
          <h3 className='audioh3'>Poslech pohádek</h3>
          <AudioPlayer tracks={props.appData.audio}/>
        </div>}
        
      </div>
      <Footer />
    </>
  );
};

export default AudioTales;