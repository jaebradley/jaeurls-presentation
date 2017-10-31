import { combineReducers } from 'redux';

import UpdateErrors from './UpdateErrors';
import UpdateInputUrlValue from './UpdateInputUrlValue';
import UpdateJaeUrl from './UpdateJaeUrl';
import UpdateUriValidity from './UpdateUriValidity';

const JaeUrisCreator = combineReducers({
  UpdateErrors,
  UpdateInputUrlValue,
  UpdateJaeUrl,
  UpdateUriValidity
});

export default JaeUrisCreator;
