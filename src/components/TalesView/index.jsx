import React from 'react';
import ButtonRead from '../ButtonRead';
import KeyWords from '../KeyWords';
import Paragraph from '../Paragraph';
import './style.css';

const defaultImg = "https://firebasestorage.googleapis.com/v0/b/nadobrounoc-e4493.appspot.com/o/img%2FLamaHi%20112.png?alt=media&token=a8199f4f-16a1-45cb-80cc-d3ac7dbdd511";

const TalesView = ({id, name, keywords, text, img}) => {

  return(
    <div className='talesview'>
      <div className='imgContainer'>
        <img src={img ? img : defaultImg} />
      </div>
      <div className='textContainer'>
        <h3>{name}</h3>
      <KeyWords keywords={keywords}/>
      <div className='talesParagraph'>
        <Paragraph isElipsis={true} paragraph={text[0]}/>
      </div>
      <ButtonRead id={id}/>
      </div>
    </div>
  );
};

export default TalesView;