import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, AboutMe, User } from 'pages';

const router = createBrowserRouter([
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
