import React from 'react';
import Header from '../../components/Header';
import KeyWords from '../../components/KeyWords';
import data from '../../assets/database.json';
import Footer from '../../components/Footer';
import YouTube from 'react-youtube';
import './style.css';
import unicorn from '../../components/AudioPlayer/img/unicorn.png';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import { PAGES } from '../../helpers';
import ButtonTales from '../../components/ButtonTales';
import ButtonPrev from '../../components/ButtonPrev';
import ButtonNext from '../../components/ButtonNext';

const Tales = (props) => {

  const fairytale = data.fairytales[props.match.params.id - 1];

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const onError = (event) => {
    event.target.videoError();
  };

  return(
    <div>
      <Header />
      <div className='tales'>
        <h2>{fairytale.name}</h2>
        <KeyWords islight={true} keywords={fairytale.keywords}/>
        {fairytale.youtubeid ? 
        <div className='youtube'><YouTube 
          videoId={fairytale.youtubeid} 
          opts={opts} 
          onReady={onReady} /></div>
          : 
          ''
          }
        {fairytale.youtubeid ?
        <p className='reader'>Namluvil: {fairytale.reader}</p> : ''}
        {fairytale.audio ?
        <div className='audio'><AudioPlayer page={PAGES.tales} tracks={[{...fairytale.audio, image:unicorn}]} /></div>
        : ''  
      }
        <p className='text'>{fairytale.texttale}</p>
      </div>
      <div className='buttonstale'>
        <ButtonPrev />
        <ButtonTales />
        <ButtonNext />
      </div>
      <Footer fixedbottom={false} />
    </div>
  );
};

export default Tales;