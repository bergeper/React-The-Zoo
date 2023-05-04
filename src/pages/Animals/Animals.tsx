import { useEffect, useState } from 'react';
import './Animals.scss';
import { getAnimalsFromApi } from '../../services/getAnimalsFromApi';
import { IAnimal } from '../../models/IAnimal';
import { ViewAnimal } from '../../components/ViewAnimal/ViewAnimal';
import { getAnimalsFromLS } from '../../helpers/getAnimalsFromLS';
import { saveAnimalsToLS } from '../../helpers/saveAnimalsToLS';
import { feedingTimer } from '../../helpers/feedingTimer';

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const animalsFromLS = getAnimalsFromLS();

  useEffect(() => {
    if (animalsFromLS.length === 0) {
      getAnimalsFromApi().then((res) => {
        setAnimals(res);
        saveAnimalsToLS(res);
      });
    } else {
      setAnimals(animalsFromLS);
    }
  }, []);

  feedingTimer(animals);

  return (
    <>
      {animals.map((animal, index) => (
        <section className='animal--container' key={animal.id}>
          <ViewAnimal {...animal} fullDesc={false}></ViewAnimal>
        </section>
      ))}
    </>
  );
};
