import React from 'react';
import './style.css';

const KeyWord = ({islight, keyword}) => {
  return(
    <div className={`keyword ${islight ? 'keywordLight' : ''}`}>{keyword}</div>
  );
};

export default KeyWord;