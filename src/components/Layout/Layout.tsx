import { Outlet } from 'react-router';
import { Navbar } from '../Navbar/NavBar';
import './Layout.scss';

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='container'>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
