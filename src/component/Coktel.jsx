import { useState, useEffect } from 'react';
import axios from 'axios';
import './Coktel.css';

const Coktel = () => {
  const [coktelName, setCoktelName] = useState('');
  const [imgCoktel, setImgCoktel] = useState('');
  const url = `https://thecocktaildb.com/api/json/v1/1/random.php`;

  useEffect(() => {
    axios
      .get(url)
      .then((results) => results.data)
      .then((data) => {
        setCoktelName(data.drinks[0].strDrink);
        setImgCoktel(data.drinks[0].strDrinkThumb);
      });
  }, []);
  return (
    <div className='coktel-display'>
      <h1>Cocktail du jour ^^</h1>
      <h1>{coktelName}</h1>
      <img src={imgCoktel}></img>
    </div>
  );
};

export default Coktel;
