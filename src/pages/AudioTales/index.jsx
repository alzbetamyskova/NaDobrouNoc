import React, { useEffect } from 'react';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PAGES } from '../../helpers';
import unicorn from '../../components/AudioPlayer/img/unicorn.png';
import './style.css';
import Spinner from '../../components/Spinner';

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
    <div className='audiotales'>
      <Header page={PAGES.audiotales}/>
      {!props.appData ? <Spinner /> :
      <div>
        <h3 className='audioh3'>Poslech pohádek</h3>
        <AudioPlayer tracks={props.appData.audio}/>
      </div>}
      <Footer fixedbottom={true}/>
    </div>
  );
};

export default AudioTales;