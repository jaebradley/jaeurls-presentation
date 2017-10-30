import { UPDATE_URI_VALIDITY } from '../constants/ActionType';

const UpdateUriValidity = (state = { isValidUri: false }, action) => {
  switch (action.type) {
    case UPDATE_URI_VALIDITY:
      return {
        isValidUri: action.isValidUri,
      };
    default:
      return state;
  };
};

export default UpdateUriValidity;
