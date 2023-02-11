import { TOGGLE_LATEST, TOGGLE_OLDEST } from '../actionTypes/actionTypes';

const initialState = {
  filters: {
    latest: false,
    oldest: false,
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LATEST:
      return {
        ...state,
        filters: {
          ...state.filters,
          latest: !state.filters.latest,
        },
      };

    case TOGGLE_OLDEST:
      return {
        ...state,
        filters: {
          ...state.filters,
          oldest: !state.filters.oldest,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
