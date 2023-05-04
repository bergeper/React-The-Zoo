import { IAnimal } from '../models/IAnimal';

export const saveAnimalsToLS = (animals: IAnimal[]) => {
  localStorage.setItem('animals', JSON.stringify(animals) || '[]');
};
