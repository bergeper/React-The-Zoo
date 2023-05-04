import './ViewAnimal.scss';
import { IAnimal } from '../../models/IAnimal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IAimalProps extends IAnimal {
  fullDesc?: boolean;
}

export const ViewAnimal = ({
  id,
  name,
  imageUrl,
  latinName,
  yearOfBirth,
  shortDescription,
  longDescription,
  medicine,
  isFed,
  lastFed,
  fullDesc,
}: IAimalProps) => {
  const [brokenImage, setBrokenImage] = useState<string>('');

  const imageError = (event: any) => {
    setBrokenImage(
      'https://www.thewindowsclub.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif'
    );
    event.target.src = brokenImage;
  };
  if (!fullDesc) {
    return (
      <>
        <article className={`animals ${isFed ? 'fed' : ''}`}>
          <h3 className='animals__name'>{name}</h3>
          <div className='animals__imgContainer'>
            <Link to={id.toString()}>
              <img
                src={imageUrl}
                className='animals__img'
                onError={imageError}
              ></img>
            </Link>
          </div>
          <p className='animals__desc'>{shortDescription}</p>
        </article>
      </>
    );
  } else {
    return (
      <>
        <article className={`animals ${isFed ? 'fed' : ''}`}>
          <h3 className='animals__name'>{name}</h3>
          <div className='animals__imgContainer'>
            <img
              src={imageUrl}
              className='animals__img'
              onError={imageError}
            ></img>
          </div>
          <p className='animals__desc'>{longDescription}</p>
        </article>
      </>
    );
  }
};
