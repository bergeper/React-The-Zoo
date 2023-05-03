import './ViewAnimal.scss';
import { IAnimal } from '../../models/IAnimal';

export const ViewAnimal = (animal: IAnimal) => {
  return (
    <>
      <article key={animal.id} className='animals'>
        <h3 className='animals__name'>{animal.name}</h3>
        <div className='animals__imgContainer'>
          <img src={animal.imageUrl} className='animals__img'></img>
        </div>
        <p className='animals__desc'>{animal.shortDescription}</p>
      </article>
    </>
  );
};
