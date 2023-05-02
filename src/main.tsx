import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Animals } from './pages/Animals/Animals';
import { ViewAnimal } from './pages/ViewAnimals/ViewAnimal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/animals',
    element: <Animals></Animals>,
  },
  {
    path: '/animals/:id',
    element: <ViewAnimal></ViewAnimal>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
