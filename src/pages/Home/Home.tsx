import { useEffect, useState } from 'react';
import './Home.scss';
import { feedAnimals } from '../../helpers/feedAnimals';
import { getAnimalsFromLS } from '../../helpers/getAnimalsFromLS';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [hungryAnimals, setHungryAnimals] = useState(0);
  const animalsFromLS = getAnimalsFromLS();

  useEffect(() => {
    if (animalsFromLS.length === 0) {
      setHungryAnimals(15);
    } else {
      let hungry = feedAnimals(animalsFromLS);
      setHungryAnimals(hungry);
    }
  }, []);

  return (
    <>
      <article className='hero'>
        <h1 className='hero__title'>The Zoo!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ratione
          hic laborum minus assumenda labore molestias rerum dolores odio
          exercitationem suscipit, maxime aliquam veniam accusantium laudantium
          aut doloribus, eius rem.
        </p>
        {hungryAnimals === 0 ? (
          <h3>Alla djur är mätta!</h3>
        ) : (
          <>
            <h3>Du behöver mata: {hungryAnimals.toString()} djur</h3>

            <Link to='/animals'>
              <button className='hero__btn'>Till djuren!</button>
            </Link>
          </>
        )}
      </article>
    </>
  );
};
