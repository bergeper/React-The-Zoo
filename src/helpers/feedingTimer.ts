import { IAnimal } from '../models/IAnimal';
import { saveAnimalsToLS } from './saveAnimalsToLS';

export const feedingTimer = (animals: IAnimal[]) => {
  const getTime = new Date().getTime();

  animals.map((ani) => {
    const lastFed = Date.parse(ani.lastFed);
    if (getTime - lastFed > 10000) {
      // 14400000
      ani.isFed = false;
      saveAnimalsToLS(animals);
    }
  });
};
