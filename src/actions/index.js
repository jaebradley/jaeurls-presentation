const ValidUrl = require('valid-url');

import {
  UPDATE_INPUT_URL_VALUE,
  UPDATE_JAE_URL,
  UPDATE_URI_VALIDITY,
  FETCH_JAE_URL,
  FETCH_JAE_URL_SUCCESS,
  FETCH_JAE_URL_FAILURE
} from '../constants/ActionType';

export const updateJaeUrl = (data) => {
  return {
    type: UPDATE_JAE_URL,
    jaeUrl: data.Url,
  };
};

export const updateInputUrlValue = (url) => {
  return {
    type: UPDATE_INPUT_URL_VALUE,
    inputUrlValue: url,
  };
}

export const updateUriValidity = (uri) => {
  return {
    type: UPDATE_URI_VALIDITY,
    isValidUri: !!ValidUrl.isUri(uri),
  };
};

export const fetchJaeUrl = (url) => {
  return (dispatch) => {
    return fetch('https://jaeurls.herokuapp.com/api/v1/', {
      method: 'POST',
      body: JSON.stringify({ url }),
    }).then(response => response.json())
      .then(data => {
        dispatch(updateJaeUrl(data));
        dispatch({ type: FETCH_JAE_URL_SUCCESS });
      }).catch(error => dispatch({ type: FETCH_JAE_URL_FAILURE }));
  };
};
