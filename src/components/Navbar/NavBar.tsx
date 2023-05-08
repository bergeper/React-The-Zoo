import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <Link className='nav__home' to='/'>
        <i className='fa-solid fa-hippo nav__home--logo'></i>
        <h3 className='nav__home--title'>The Zoo</h3>
      </Link>
      <ul className='nav__menu'>
        <Link className='nav__menu--link' to='/'>
          <li className='nav__menu--item'>Hem</li>
        </Link>
        <Link className='nav__menu--link' to='/animals'>
          <li className='nav__menu--item'>Djuren</li>
        </Link>
      </ul>
    </nav>
  );
};
