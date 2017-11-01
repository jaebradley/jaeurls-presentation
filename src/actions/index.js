import {
  UPDATE_INPUT_URL_VALUE,
  UPDATE_JAE_URL,
  UPDATE_URI_VALIDITY,
  FETCH_JAE_URL_FAILURE,
  FETCH_JAE_URL_SUCCESS,
} from '../constants/ActionType';

const ValidUrl = require('valid-url');

export const updateJaeUrl = data => (
  {
    type: UPDATE_JAE_URL,
    jaeUrl: data.Url,
  }
);

export const updateInputUrlValue = url => (
  {
    type: UPDATE_INPUT_URL_VALUE,
    inputUrlValue: url,
  }
);

export const updateUriValidity = uri => (
  {
    type: UPDATE_URI_VALIDITY,
    isValidUri: !!ValidUrl.isUri(uri),
  }
);

export const fetchJaeUrl = url => (
  dispatch => (
    fetch('https://jaeurls.herokuapp.com/api/v1/', {
      method: 'POST',
      body: JSON.stringify({ url }),
    }).then(response => response.json())
      .then((data) => {
        dispatch(updateJaeUrl(data));
        dispatch({ type: FETCH_JAE_URL_SUCCESS });
      }).catch(() => dispatch({ type: FETCH_JAE_URL_FAILURE }))
  )
);
