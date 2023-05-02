import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar/NavBar';
import './Animals.scss';
import { getAnimalsFromApi } from '../../services/getAnimalsFromApi';
import { IAnimal } from '../../models/IAnimal';
import { Link } from 'react-router-dom';
import { ViewAnimal } from '../../components/ViewAnimal/ViewAnimal';
import { getAnimalsFronLS } from '../../helpers/getAnimalsFromLS';

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const animalsFromLS = getAnimalsFronLS();

  useEffect(() => {
    if (!animalsFromLS.length) {
      console.log(animalsFromLS.length);
      getAnimalsFromApi().then((res) => {
        setAnimals(res);
        localStorage.setItem('animals', JSON.stringify([...animals]) || '[]');
      });
    } else {
      setAnimals(animalsFromLS);
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <main className='content'>
        {animals.map((animal, index) => (
          <Link key={index} to={animal.id.toString()}>
            <ViewAnimal {...animal}></ViewAnimal>
          </Link>
        ))}
      </main>
    </>
  );
};
