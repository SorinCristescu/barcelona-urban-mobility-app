import * as types from './types';

const initialState = {
  theme: 'light',
};

// COUNTER REDUCER
export const navigationReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};
