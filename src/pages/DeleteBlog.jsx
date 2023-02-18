import { Button, Table } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteBlogs from '../redux/thunk/blogs/deleteBlogs';
import fetchBlogs from '../redux/thunk/blogs/fetchBlogs';

const DeleteBlog = () => {
  const blogs = useSelector(state => state.blog.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      <div className="container mx-auto py-10">
        <Table>
          <Table.Head>
            <Table.HeadCell>Blog Title</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {blogs.map(blog => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={blog._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {blog.title}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    size="xs"
                    onClick={() => dispatch(deleteBlogs(blog._id))}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default DeleteBlog;
