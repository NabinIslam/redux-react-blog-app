import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlog(data);
      });
  }, []);

  console.log(blog);

  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="font-bold text-4xl mb-10">{blog.title}</h1>
        <p className="font-normal text-xl">{blog.desc}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
