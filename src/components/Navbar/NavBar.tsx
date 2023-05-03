import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <h3 className='nav__title'>The Zoo</h3>
      <ul className='nav__menu'>
        <li className='nav__menu--link'>
          <Link className='nav__menu--link' to='/'>
            Hem
          </Link>
        </li>
        <li className='nav__menu--link'>
          <Link className='nav__menu--link' to='/animals'>
            Djuren
          </Link>
        </li>
      </ul>
    </nav>
  );
};
