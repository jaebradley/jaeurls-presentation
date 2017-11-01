import {
  FETCH_JAE_URL_FAILURE,
  FETCH_JAE_URL_SUCCESS
} from '../constants/ActionType';

const UpdateErrors = (state = {}, action) => {
  switch (action.type) {
    case FETCH_JAE_URL_FAILURE:
      return { fetchJaeUrlFailure: true };
    case FETCH_JAE_URL_SUCCESS:
      return { fetchJaeUrlFailure: false };
    default:
      return state;
  }
};

export default UpdateErrors;
