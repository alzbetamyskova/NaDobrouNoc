import React from 'react';
import KeyWord from '../Keyword';
import './style.css';

const KeyWords = ({islight, keywords}) => {
  return(
    <div className='keywords'>
      {keywords.map((keyword) => <KeyWord islight={islight} keyword={keyword} key={keyword}/>)}
    </div>
  );
};

export default KeyWords;