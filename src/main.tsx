import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Animals } from './pages/Animals/Animals';
import { DisplayAnimal } from './pages/DisplayAnimal/DisplayAnimal';
import { Error } from './pages/Error/Error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: '/animals',
    element: <Animals></Animals>,
  },
  {
    path: '/animals/:id',
    element: <DisplayAnimal></DisplayAnimal>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
