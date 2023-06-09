import { Home, AboutMe, User } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/about', element: <AboutMe /> },
  {
    path: 'user/:id',
    element: <User />,
  },
]);
