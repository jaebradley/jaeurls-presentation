import { combineReducers } from 'redux';

import UpdateErrors from './UpdateErrors';
import UpdateInputUrlValue from './UpdateInputUrlValue';
import UpdateJaeUrl from './UpdateJaeUrl';
import UpdateUrlValidity from './UpdateUrlValidity';

const JaeUrlsCreator = combineReducers({
  UpdateErrors,
  UpdateInputUrlValue,
  UpdateJaeUrl,
  UpdateUrlValidity
});

export default JaeUrlsCreator;
