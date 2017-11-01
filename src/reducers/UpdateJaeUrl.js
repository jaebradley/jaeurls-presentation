import {
  UPDATE_JAE_URL
} from '../constants/ActionType';

const UpdateJaeUrl = (state = { jaeUrl: '' }, action) => {
  switch (action.type) {
    case UPDATE_JAE_URL:
      return { jaeUrl: action.jaeUrl };
    default:
      return state;
  }
}

export default UpdateJaeUrl;
