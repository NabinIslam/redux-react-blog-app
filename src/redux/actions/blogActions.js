import {
  ADD_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
  ADD_TO_HISTORY,
} from '../actionTypes/actionTypes';

export const addBlog = data => {
  return {
    type: ADD_CONTENT,
    payload: data,
  };
};

export const fetchBlog = data => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const deleteBlog = id => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const editBlog = id => {
  return {
    type: UPDATE_CONTENT,
    payload: id,
  };
};

export const addToHistory = blog => {
  return {
    type: ADD_TO_HISTORY,
    payload: blog,
  };
};
