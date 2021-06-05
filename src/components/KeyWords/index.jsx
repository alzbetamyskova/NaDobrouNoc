import React from 'react';
import KeyWord from '../Keyword';

const KeyWords = ({keywords}) => {
  return(
    <div>
      {keywords.map((keyword) => <KeyWord keyword={keyword} key={keyword}/>)}
    </div>
  );
};

export default KeyWords;