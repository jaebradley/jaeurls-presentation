import { combineReducers } from 'redux';

import UpdateErrors from './UpdateErrors';
import UpdateFetchStatus from './UpdateFetchStatus';
import UpdateInputUrlValue from './UpdateInputUrlValue';
import UpdateJaeUrl from './UpdateJaeUrl';
import UpdateUrlValidity from './UpdateUrlValidity';

const JaeUrlsCreator = combineReducers({
  UpdateFetchStatus,
  UpdateErrors,
  UpdateInputUrlValue,
  UpdateJaeUrl,
  UpdateUrlValidity
});

export default JaeUrlsCreator;
