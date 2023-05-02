import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar/NavBar';
import './Animals.scss';
import { getAnimalsFromApi } from '../../services/getAnimalsFromApi';
import { IAnimal } from '../../models/IAnimal';

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    getAnimalsFromApi().then((res) => {
      setAnimals(res);
    });
  }, []);
  console.log(animals);

  let animalsHtml: JSX.Element[] = [<></>];
  animalsHtml = animals.map((a, i) => (
    <div key={i}>
      <h3>{a.name}</h3>
    </div>
  ));

  return (
    <>
      <Navbar></Navbar>
      {animalsHtml}
    </>
  );
};
