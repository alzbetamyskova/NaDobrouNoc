import React from 'react';
import KeyWord from '../Keyword';
import './style.css';

const KeyWords = ({keywords}) => {
  return(
    <div className='keywords'>
      {keywords.map((keyword) => <KeyWord keyword={keyword} key={keyword}/>)}
    </div>
  );
};

export default KeyWords;