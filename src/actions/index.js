import {
  UPDATE_INPUT_URL_VALUE,
  UPDATE_JAE_URL,
  UPDATE_URL_VALIDITY,
  FETCH_JAE_URL_FAILURE,
  FETCH_JAE_URL_SUCCESS,
  FINISHED_FETCHING_JAE_URL,
  STARTED_FETCHING_JAE_URL
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

export const updateUrlValidity = url => (
  {
    type: UPDATE_URL_VALIDITY,
    isValidUrl: !!ValidUrl.isWebUri(url),
  }
);

export const startedFetchingJaeUrl = () => (
  { type: STARTED_FETCHING_JAE_URL }
)

export const finishedFetchingJaeUrl = () => (
  { type: FINISHED_FETCHING_JAE_URL }
)

export const fetchJaeUrl = url => (
  dispatch => {
    dispatch(startedFetchingJaeUrl())
    fetch('https://jaeurls.herokuapp.com/api/v1/', {
      method: 'POST',
      body: JSON.stringify({ url }),
    }).then(response => response.json())
      .then((data) => {
        dispatch(updateJaeUrl(data))
        dispatch({ type: FETCH_JAE_URL_SUCCESS })
        dispatch(finishedFetchingJaeUrl())
      }).catch(() => dispatch({ type: FETCH_JAE_URL_FAILURE }))
  }
);
