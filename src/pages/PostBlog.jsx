import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import addBlogData from '../redux/thunk/blogs/addBlogData';

const PostBlog = () => {
  const dispatch = useDispatch();

  const handlePost = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const desc = form.desc.value;

    const blog = {
      title,
      desc,
      date: new Date(),
    };

    dispatch(addBlogData(blog, form));
  };
  return (
    <div>
      <div className="container mx-auto py-5">
        <form className="max-w-md mx-auto" onSubmit={handlePost}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput type="text" name="title" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea rows={5} name="desc" sizing="md" />
          </div>
          <Button className="my-3" type="submit">
            Post
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
