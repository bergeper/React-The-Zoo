import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar/NavBar';
import { getAnimalsFromApi } from '../services/getAnimalsFromApi';
import { IAnimal } from '../models/IAnimal';
import { Link } from 'react-router-dom';
import { ViewAnimal } from '../components/ViewAnimal/ViewAnimal';
import { getAnimalsFromLS } from '../helpers/getAnimalsFromLS';

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const animalsFromLS = getAnimalsFromLS();

  useEffect(() => {
    if (animalsFromLS.length === 0) {
      getAnimalsFromApi().then((res) => {
        setAnimals(res);
        localStorage.setItem('animals', JSON.stringify(res) || '[]');
      });
    } else {
      setAnimals(animalsFromLS);
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <main className='container'>
        {animals.map((animal, index) => (
          <Link
            className='animal--container'
            key={index}
            to={animal.id.toString()}
          >
            <ViewAnimal {...animal}></ViewAnimal>
          </Link>
        ))}
      </main>
    </>
  );
};
