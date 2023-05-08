import { useEffect, useState } from 'react';
import './Animals.scss';
import { getAnimalsFromApi } from '../../services/getAnimalsFromApi';
import { IAnimal } from '../../models/IAnimal';
import { ViewAnimal } from '../../components/ViewAnimal/ViewAnimal';
import { getAnimalsFromLS } from '../../helpers/getAnimalsFromLS';
import { saveAnimalsToLS } from '../../helpers/saveAnimalsToLS';
import { feedingTimer } from '../../helpers/feedingTimer';
import { feedAnimals } from '../../helpers/feedAnimals';

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [hungryAnimals, setHungryAnimals] = useState(0);
  const animalsFromLS = getAnimalsFromLS();

  useEffect(() => {
    if (animalsFromLS.length === 0) {
      getAnimalsFromApi().then((res) => {
        setAnimals(res);
        saveAnimalsToLS(res);
      });
      setHungryAnimals(15);
    } else {
      setAnimals(animalsFromLS);
      let hungry = feedAnimals(animalsFromLS);
      setHungryAnimals(hungry);
    }
  }, []);

  feedingTimer(animals);

  return (
    <>
      {hungryAnimals === 0 ? (
        <h2>Alla djuren är mätta!</h2>
      ) : (
        <>
          <h2>Några av djuren är hungriga!</h2>
          <p>Du behöver mata: {hungryAnimals.toString()} djur</p>
        </>
      )}
      <h3 className='content__title'>
        Välj ett djur genom att klicka på bilden
      </h3>
      <section className='content'>
        {animals.map((animal, index) => (
          <ViewAnimal key={animal.id} {...animal} fullDesc={false}></ViewAnimal>
        ))}
      </section>
    </>
  );
};
