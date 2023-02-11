import { addBlog } from '../../actions/blogActions';

const addBlogData = (blog, form) => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(blog),
    });

    const data = await res.json();

    if (data.acknowledged) {
      dispatch(addBlog({ ...blog }));
      form.reset();
    }
  };
};

export default addBlogData;
