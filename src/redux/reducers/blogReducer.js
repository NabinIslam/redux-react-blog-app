import {
  ADD_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
  ADD_TO_HISTORY,
} from '../actionTypes/actionTypes';

const initialState = {
  historys: [],
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  const seenBlog = state.historys.find(blog => blog._id === action.payload._id);

  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };

    case DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog._id !== action.payload),
      };

    case UPDATE_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case ADD_TO_HISTORY:
      if (seenBlog) {
        const newHistorys = state.historys.filter(
          blog => blog._id !== seenBlog._id
        );

        seenBlog.quantity = seenBlog.quantity + 1;

        return {
          ...state,
          historys: [...newHistorys, seenBlog],
        };
      }

    default:
      return state;
  }
};

export default blogReducer;
