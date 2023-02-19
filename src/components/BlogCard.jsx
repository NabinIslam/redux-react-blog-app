import React, { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import BlogEditModal from './BlogEditModal';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../redux/actions/blogActions';

const BlogCard = ({ blog }) => {
  const { title, desc, date, _id } = blog;

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {desc.slice(1, 100) + '...'}
      </p>
      <p>
        <span className="font-semibold">Published:</span> {date}
      </p>
      <Link to={`/${_id}`}>
        <Button onClick={() => dispatch(addToHistory(blog))}>
          Read more
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Link>
      <span>
        <Button color="purple" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </span>
      <BlogEditModal
        open={open}
        setOpen={setOpen}
        title={title}
        desc={desc}
        id={_id}
      />
    </Card>
  );
};

export default BlogCard;
