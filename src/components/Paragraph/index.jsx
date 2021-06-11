import React from 'react';
import './style.css';

const Paragraph = ({paragraph, isElipsis}) => {
  return (
    <p className={`paragraph ${isElipsis ? 'elipsis' : ''}`}>
      {paragraph}
    </p>
  );
};

export default Paragraph;