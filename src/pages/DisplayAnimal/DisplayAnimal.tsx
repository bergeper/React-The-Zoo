import { useParams } from 'react-router';
import './DisplayAnimal.scss';
import { IAnimal } from '../../models/IAnimal';
import { ViewAnimal } from '../../components/ViewAnimal/ViewAnimal';
import { useState } from 'react';
import { Error } from '../Error/Error';
import { getAnimalsFromLS } from '../../helpers/getAnimalsFromLS';
import { saveAnimalsToLS } from '../../helpers/saveAnimalsToLS';
import { feedingTimer } from '../../helpers/feedingTimer';

export const DisplayAnimal = () => {
  const animalsFromLS = getAnimalsFromLS();

  const [animals, setAnimals] = useState<IAnimal[]>(animalsFromLS);
  const params = useParams();

  const animal: IAnimal | undefined = animals.find(
    (ani) => ani.id.toString() === params.id
  );

  const feed = () => {
    animals.map((ani) => {
      if (animal?.id === ani.id) {
        ani.isFed = true;
        ani.lastFed = new Date().toLocaleString();
      } else {
        return;
      }
    });
    setAnimals([...animals]);
    saveAnimalsToLS([...animals]);
  };

  feedingTimer(animals);

  return (
    <>
      <section className='animal'>
        {animal ? (
          <>
            <ViewAnimal {...animal} fullDesc={true}></ViewAnimal>
            <p>Senast matad: {animal?.lastFed}</p>
            <button
              onClick={() => {
                feed();
              }}
              disabled={animal?.isFed === true}
            >
              Mata
            </button>
          </>
        ) : (
          <Error></Error>
        )}
      </section>
    </>
  );
};
