import React, { useEffect, useState } from 'react';
// import { db } from '../../db';

const ListOfTales = () => {

  const [pohadky, setPohady] = useState ([
    {
      nazev: 'něco něc'
    },
    {
      nazev: 'něco nco'
    },
    {
      nazev: 'něco ěco'
    },
  ]);

  return(
    <ul>
      {pohadky.map((pohadka) => (<li>{pohadky.nazev}</li>))}
    </ul>
  )
};

export default ListOfTales;