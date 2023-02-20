import { addBlog } from '../../actions/blogActions';

const addBlogData = (blog, form) => {
  return async (dispatch, getState) => {
    const res = await fetch('https://redux-blog-server-ten.vercel.app/blogs', {
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
