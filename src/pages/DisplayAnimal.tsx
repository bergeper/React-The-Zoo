import { useParams } from 'react-router';
import { Navbar } from '../components/Navbar/NavBar';
import { IAnimal } from '../models/IAnimal';
import { ViewAnimal } from '../components/ViewAnimal/ViewAnimal';
import { useState } from 'react';
import { Error } from './Error';
import { getAnimalsFromLS } from '../helpers/getAnimalsFromLS';

export const DisplayAnimal = () => {
  let animalsFromLS = getAnimalsFromLS();

  const [animals, setAnimals] = useState<IAnimal[]>(animalsFromLS);
  const [time, setTime] = useState('');
  const params = useParams();

  const animal: IAnimal | undefined = animals.find(
    (ani) => ani.id.toString() === params.id
  );

  const feed = () => {
    animals.map((ani) => {
      if (animal?.id === ani.id) {
        ani.isFed = true;
        ani.lastFed = new Date().toLocaleString();
        console.log(animals);

        // feedingtimer();
      } else {
        return;
      }
    });
    setAnimals([...animals]);
    localStorage.setItem('animals', JSON.stringify([...animals]) || '[]');
  };

  // const feedingtimer = () => {
  //   const timer = new Date().getTime();

  //   animals.map((ani) => {
  //     if (animal?.id == ani.id) {
  //       const lastFed = ani.lastFed.getTime();
  //       console.log(timer, lastFed);
  //       if (timer < lastFed) {
  //         console.log(timer, lastFed);
  //       }
  //     }
  //   });
  // };

  return (
    <>
      <Navbar></Navbar>
      <main className='container'>
        <section className='animal'>
          {animal ? (
            <>
              <ViewAnimal {...animal}></ViewAnimal>
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
      </main>
    </>
  );
};
