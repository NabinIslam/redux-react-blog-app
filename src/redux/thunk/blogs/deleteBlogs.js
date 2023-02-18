import { deleteBlog } from '../../actions/blogActions';

const deleteBlogs = id => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          dispatch(deleteBlog(id));
        }
      });
  };
};

export default deleteBlogs;
