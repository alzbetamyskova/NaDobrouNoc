import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import KeyWords from '../../components/KeyWords';
import Footer from '../../components/Footer';
import YouTube from 'react-youtube';
import './style.css';
import unicorn from '../../components/AudioPlayer/img/unicorn.png';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import { PAGES } from '../../helpers';
import ButtonTales from '../../components/ButtonTales';
import ButtonPrev from '../../components/ButtonPrev';
import ButtonNext from '../../components/ButtonNext';
import ButtonUp from '../../components/ButtonUp';
import Paragraph from '../../components/Paragraph';
import Spinner from '../../components/Spinner';

const Tales = (props) => {
  
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

  useEffect(
    () => {
      if (!props.appData) {
        fetch('https://nadobrounoc-e4493-default-rtdb.europe-west1.firebasedatabase.app/data.json')
            .then((resp) => resp.json())
            .then((json) => props.setAppData(json))
      }
    }, [props.appData]
);

  const fairytale = props.appData && props.appData.fairytales[props.match.params.id - 1];

  return(
    <div>
      <Header page={PAGES.tales}/>
      {!fairytale ? <Spinner /> :
      <div> 
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
          <div className='divpara'>
            {Array.isArray(fairytale.texttale) && fairytale.texttale.map((paragraph, index) => <Paragraph key={`paragraph${index}`} paragraph={paragraph}/>)}
          </div>
        </div>
        <div className='buttonstale'>
          <ButtonPrev id={fairytale.id}/>
          <ButtonTales appData={props.appData}/>
          <ButtonNext id={fairytale.id}/>
        </div>
        <ButtonUp />
      </div>
      }
      
      <Footer fixedbottom={false} />
    </div>
  );
};

export default Tales;