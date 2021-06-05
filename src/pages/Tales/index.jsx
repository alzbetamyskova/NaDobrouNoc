import React from 'react';
import Header from '../../components/Header';
import KeyWords from '../../components/KeyWords';
import data from '../../assets/database.json';

const Tales = (props) => {

  const fairytale = data.fairytales[props.match.params.id - 1];

  return(
    <div>
      <Header />
      <h2>{fairytale.name}</h2>
      <KeyWords keywords={fairytale.keywords}/>
      <p>{fairytale.texttale}</p>
    </div>
  );
};

export default Tales;