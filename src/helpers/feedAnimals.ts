import { IAnimal } from '../models/IAnimal';

export const feedAnimals = (animals: IAnimal[]) => {
  let hungry = 0;
  animals.map((ani) => {
    if (ani.isFed === false) {
      hungry++;
    }
  });
  return hungry;
};
