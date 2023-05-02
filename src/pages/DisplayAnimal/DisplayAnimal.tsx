import { useParams } from 'react-router';
import { Navbar } from '../../components/Navbar/NavBar';
import { IAnimal } from '../../models/IAnimal';
import { ViewAnimal } from '../../components/ViewAnimal/ViewAnimal';
import { useState } from 'react';
import { Error } from '../Error/Error';
import { getAnimalsFronLS } from '../../helpers/getAnimalsFromLS';

export const DisplayAnimal = () => {
  let animalsFromLS = getAnimalsFronLS();

  const [animals, setAnimals] = useState<IAnimal[]>(animalsFromLS);
  const params = useParams();

  const animal: IAnimal | undefined = animals.find(
    (ani) => ani.id.toString() === params.id
  );

  const feed = () => {
    animals.map((ani) => {
      if (animal?.id === ani.id) {
        ani.isFed = true;
        console.log(animals);
      } else {
        return;
      }
    });
    setAnimals([...animals]);
    localStorage.setItem('animals', JSON.stringify([...animals]) || '[]');
  };

  return (
    <>
      <Navbar></Navbar>
      {animal ? <ViewAnimal {...animal}></ViewAnimal> : <Error></Error>}

      <button
        onClick={() => {
          feed();
        }}
        disabled={animal?.isFed === true}
      >
        Mata
      </button>
    </>
  );
};
