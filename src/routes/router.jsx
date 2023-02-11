import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import PostBlog from '../pages/PostBlog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/post-blog',
        element: <PostBlog />,
      },
    ],
  },
]);

export default router;
