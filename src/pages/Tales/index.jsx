import React from 'react';
import Header from '../../components/Header';
import KeyWords from '../../components/KeyWords';
import data from '../../assets/database.json';
import Footer from '../../components/Footer';
import YouTube from 'react-youtube';
import './style.css';

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
        <KeyWords keywords={fairytale.keywords}/>
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
        <p class='text'>{fairytale.texttale}</p>
      </div>
      <Footer fixedbottom={true} />
    </div>
  );
};

export default Tales;