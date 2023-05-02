import { IAnimal } from '../models/IAnimal';

// let animalsFromLS: IAnimal[] = [];

export const getAnimalsFronLS = () => {
  let animalsFromLS: IAnimal[] = JSON.parse(
    (localStorage.getItem('animals') as string) || '[]'
  );
  return animalsFromLS;
};
