import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { requireAuth, requireGuest } from './loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, loader: requireAuth },
      { path: 'login', element: <Login />, loader: requireGuest },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
export default router;
