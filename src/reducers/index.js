import { combineReducers } from 'redux';

import UpdateErrors from './UpdateErrors';
import UpdateJaeUrl from './UpdateJaeUrl';
import UpdateUriValidity from './UpdateUriValidity';

const JaeUrisCreator = combineReducers({
  UpdateErrors,
  UpdateJaeUrl,
  UpdateUriValidity
});

export default JaeUrisCreator;
