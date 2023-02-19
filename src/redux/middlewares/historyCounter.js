import { ADD_TO_HISTORY } from '../actionTypes/actionTypes';

const historyCounter = store => next => action => {
  const state = store.getstate();

  const historys = state.blog.historys;

  if (action.type === ADD_TO_HISTORY) {
    const newAction = {
      ...action,
      payload: { ...action.payload, historyPosition: historys.length },
    };

    return next(newAction);
  }

  return next(action);
};

export default historyCounter;
