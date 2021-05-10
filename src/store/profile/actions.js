import * as types from './types';
import axios from 'axios';

export const getProfile = (profile_id) => async (dispatch) => {
  dispatch({
    type: types.GET_PROFILE_START,
  });
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/${profile_id}`
    );

    dispatch({
      type: types.GET_PROFILE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const addFavorite = (_obj) => async (dispatch) => {
  const { profileId, favorite } = _obj;

  dispatch({
    type: types.ADD_FAVORITE_START,
  });
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/${profileId}/favorite`,
      favorite,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: types.ADD_FAVORITE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_FAVORITE_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteFavorite = (_obj) => async (dispatch) => {
  const { profileId, favoriteId } = _obj;
  dispatch({
    type: types.DELETE_FAVORITE_START,
  });
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/${profileId}/favorite/${favoriteId}`,
      { withCredentials: true }
    );
    dispatch({
      type: types.DELETE_FAVORITE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_FAVORITE_FAIL,
      payload: error.response.data,
    });
  }
};
