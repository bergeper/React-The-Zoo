import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <>
      <h2>Oj då! Nu har något blivit tokigt</h2>
      <h4>Kontrollera adressen och försök igen</h4>
      <Link to='/'>Tillbaka till startsidan</Link>
    </>
  );
};
