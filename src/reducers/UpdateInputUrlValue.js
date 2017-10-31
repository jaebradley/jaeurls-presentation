import {
  UPDATE_INPUT_URL_VALUE
} from '../constants/ActionType';

const UpdateInputUrlValue = (state = { inputUrlValue: null }, action) => {
  switch (action.type) {
    case UPDATE_INPUT_URL_VALUE:
      return { inputUrlValue: action.inputUrlValue };
    default:
      return state;
  }
}

export default UpdateInputUrlValue;
