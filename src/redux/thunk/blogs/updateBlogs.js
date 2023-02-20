import { editBlog } from '../../actions/blogActions';

const updateBlogs = (updatedBlog, form, id) => {
  return (dispatch, getState) => {
    fetch(`https://redux-blog-server-ten.vercel.app/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedBlog),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          dispatch(editBlog(id));
          form.reset();
        }
      });
  };
};

export default updateBlogs;
