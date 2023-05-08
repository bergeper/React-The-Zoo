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
            <img
              src={imageUrl}
              className='animals__img'
              onError={imageError}
              alt={`Picture of animal ${name} who is a ${latinName}`}
            ></img>
          </div>
          <div className='animals__img--text'>
            {isFed ? 'Jag är mätt!' : `Jag är hungrig!`}
            <div className='circle3'></div>
            <div className='circle4'></div>
          </div>
          <p className='animals__desc'>{shortDescription}</p>
          <Link to={id.toString()}>
            <button className='animals__btn'>Feed me, please!</button>
          </Link>
        </article>
      </>
    );
  } else {
    return (
      <>
        <article className={`animal ${isFed ? 'fed' : ''}`}>
          <h3 className='animal__name'>{name}</h3>
          <div className='animal__infoContainer'>
            <div className='animal__imgContainer'>
              <img
                src={imageUrl}
                className='animal__img'
                onError={imageError}
              ></img>
            </div>
            <div className='animal__info'>
              <p>Latinska namnet: {latinName}</p>
              <p>Född: {yearOfBirth}</p>
              <p>Medicin: {medicine}</p>
            </div>
          </div>
          <p className='animal__desc'>{longDescription}</p>
        </article>
      </>
    );
  }
};
