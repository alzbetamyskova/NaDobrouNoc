import React from 'react';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PAGES } from '../../helpers';
import unicorn from '../../components/AudioPlayer/img/unicorn.png';
import data from '../../assets/database.json';

const AudioTales = () => {
  return(
    <div className='audiotales'>
      <Header page={PAGES.audiotales}/>
      <h3>Poslech pohádek</h3>
      <AudioPlayer tracks={data.audio}/>
      <Footer fixedbottom={true}/>
    </div>
  );
};

export default AudioTales;