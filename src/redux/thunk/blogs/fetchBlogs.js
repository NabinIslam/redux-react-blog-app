import { fetchBlog } from '../../actions/blogActions';

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    fetch('https://redux-blog-server-ten.vercel.app/blogs')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchBlog(data));
      });
  };
};

export default fetchBlogs;
