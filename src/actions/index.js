const ValidUrl = require('valid-url');

import {
  UPDATE_URI_VALIDITY
} from '../constants/ActionType';

export const updateUriValidity = (uri) => {
  return {
    type: UPDATE_URI_VALIDITY,
    isValidUri: !!ValidUrl.isUri(uri),
  };
}
