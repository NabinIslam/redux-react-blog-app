import { TOGGLE_LATEST, TOGGLE_OLDEST } from '../actionTypes/actionTypes';

export const toggleLatest = () => {
  return {
    type: TOGGLE_LATEST,
  };
};

export const toggleOldest = () => {
  return {
    type: TOGGLE_OLDEST,
  };
};
