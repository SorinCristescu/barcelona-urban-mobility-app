import * as types from './types';

const initialState = {
  loading: false,
  errorCode: null,
  profile: null,
};

// COUNTER REDUCER
export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    case types.GET_PROFILE_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case types.ADD_FAVORITE_START:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    case types.ADD_FAVORITE_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case types.DELETE_FAVORITE_START:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    case types.DELETE_FAVORITE_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    default:
      return state;
  }
};
