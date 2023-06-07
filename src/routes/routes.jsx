import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import App from '../app';
import Videos from 'pages/Videos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/fav',
          element: <Favorites />,
        },
        {
          path: '/:id',
          element: <Videos />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
