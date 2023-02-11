import { fetchBlog } from "../../actions/blogActions";

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchBlog(data));
      });
  };
};

export default fetchBlogs;
