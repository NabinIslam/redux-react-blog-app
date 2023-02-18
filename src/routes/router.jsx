import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import BlogDetails from '../pages/BlogDetails';
import DeleteBlog from '../pages/DeleteBlog';
import EditBlog from '../pages/EditBlog';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import PostBlog from '../pages/PostBlog';
import ReadingHistory from '../pages/ReadingHistory';

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
        path: '/reading-history',
        element: <ReadingHistory />,
      },
      {
        path: '/post-blog',
        element: <PostBlog />,
      },
      {
        path: '/delete-blog',
        element: <DeleteBlog />,
      },
      {
        path: '/edit-blog',
        element: <EditBlog />,
      },
      {
        path: '/:id',
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
