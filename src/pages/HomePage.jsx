import React, { useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import Filter from '../components/Filter';
import fetchBlogs from '../redux/thunk/blogs/fetchBlogs';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const blogs = useSelector(state => state.blog.blogs);
  console.log(blogs);
  const filters = useSelector(state => state.filter.filters);

  // console.log(filters);

  const { latest, oldest } = filters;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content;

  if (blogs.length || (oldest && latest) || (!oldest && !latest)) {
    content = blogs.map(blog => <BlogCard key={blog._id} blog={blog} />);
  }

  if (blogs.length && oldest && !latest) {
    content = blogs
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map(blog => <BlogCard key={blog._id} blog={blog} />);
  }

  if (blogs.length && latest && !oldest) {
    content = blogs
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(blog => <BlogCard key={blog._id} blog={blog} />);
  }

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {content}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
