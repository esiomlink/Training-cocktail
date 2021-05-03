import { useState, useEffect } from 'react';
import axios from 'axios';
import './Coktel.css';

const Filter = () => {
  const [name, setName] = useState('');
  const [cat ,setCat] = useState('')

  
  useEffect(() => {
    axios
      .get('https://thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((results) => results.data)
      .then((data) => {
        setCat(data.drinks);
      });
  }, []);



  const [coktels, setCoktels] = useState('');
  const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`;
  useEffect(() => {
    axios
      .get(url)
      .then((results) => results.data)
      .then((data) => {
        setCoktels(data.drinks);
      });
  }, [name]);

  return (
    <div className='select-box'>
      {cat&&
      cat.map((categorie)=>(
        <div className='radio-buttons'>
              {Object.values(categorie)}
              <input
                id={Object.values(categorie)}
                value={Object.values(categorie)}
                name={Object.values(categorie)}
                type='checkbox'
                onChange={(e) => setName(e.target.value)}
                />
        </div>
          ))}
          <div className="card">
        {coktels && 
        coktels.map((coktel) => (
          <div className='coktel-display'>
            <h1>{coktel.strDrink}</h1>
            <img src={coktel.strDrinkThumb}></img>
          </div>
        
        ))}
        </div>
      </div>
  );
};

export default Filter;
