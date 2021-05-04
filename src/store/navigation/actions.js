import * as types from './types';

export const setTheme = (theme) => (dispatch) =>
  dispatch({
    type: types.SET_THEME,
    payload: theme,
  });
