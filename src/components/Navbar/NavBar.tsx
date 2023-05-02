import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div>litte logo</div>
      <ul>
        <li>
          <Link to='/'>Hem</Link>
        </li>
        <li>
          <Link to='/animals'>Djuren</Link>
        </li>
      </ul>
    </nav>
  );
};
