import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';

const ReadingHistory = () => {
  const historys = useSelector(state => state.blog.historys);

  console.log(historys);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {historys.map(blog => (
            <BlogCard key={blog._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingHistory;
