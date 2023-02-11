import {
  ADD_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
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
