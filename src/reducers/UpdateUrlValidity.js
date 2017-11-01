import { UPDATE_URL_VALIDITY } from '../constants/ActionType';

const UpdateUrlValidity = (state = { isValidUrl: false }, action) => {
  switch (action.type) {
    case UPDATE_URL_VALIDITY:
      return {
        isValidUrl: action.isValidUrl,
      };
    default:
      return state;
  }
};

export default UpdateUrlValidity;
