import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Animals } from './pages/Animals/Animals';
import { DisplayAnimal } from './pages/DisplayAnimal/DisplayAnimal';
import { Error } from './pages/Error/Error';
import { Layout } from './components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        index: true,
      },
      {
        path: '/animals',
        element: <Animals></Animals>,
      },
      {
        path: '/animals/:id',
        element: <DisplayAnimal></DisplayAnimal>,
      },
    ],
  },
]);
