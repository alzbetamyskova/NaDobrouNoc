import React from 'react';
import KeyWords from '../KeyWords';

const TalesView = ({name, keywords, text}) => {
  return(
    <div>
      <h3>{name}</h3>
      <KeyWords keywords={keywords}/>
      <p>{text}</p>
    </div>
  );
};

export default TalesView;