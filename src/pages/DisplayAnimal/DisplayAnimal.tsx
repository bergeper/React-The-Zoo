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
      {animal ? (
        <>
          <ViewAnimal {...animal} fullDesc={true}></ViewAnimal>
          <article className='feed'>
            <p className='feed__lastFed'>
              Senast matad:{' '}
              {animal.isFed
                ? animal?.lastFed
                : animal?.lastFed.substring(0, 10) +
                  ' ' +
                  animal.lastFed.substring(11, 19)}
            </p>
            <button
              className={`feed__btn ${animal.isFed ? 'feed__btn--fed' : ''}`}
              onClick={() => {
                feed();
              }}
              disabled={animal?.isFed === true}
            >
              Mata
            </button>
          </article>
        </>
      ) : (
        <Error></Error>
      )}
    </>
  );
};
