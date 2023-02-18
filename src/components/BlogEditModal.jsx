import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import updateBlogs from '../redux/thunk/blogs/updateBlogs';

const BlogEditModal = ({ open, setOpen, title, desc, id }) => {
  const dispatch = useDispatch();

  const handleUpdateBlog = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const desc = form.desc.value;
    const updatedBlog = {
      title,
      desc,
    };

    dispatch(updateBlogs(updatedBlog, form, id));
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleUpdateBlog}>
        <Modal.Header>Edit The Blog</Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              type="text"
              name="title"
              sizing="md"
              defaultValue={title}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea rows={5} name="desc" sizing="md" defaultValue={desc} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Update</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default BlogEditModal;
