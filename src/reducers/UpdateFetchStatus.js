import {
  FINISHED_FETCHING_JAE_URL,
  STARTED_FETCHING_JAE_URL
} from '../constants/ActionType'

const UpdateFetchStatus = (state = { fetchingJaeUrl: false }, action) => {
  switch (action.type) {
    case STARTED_FETCHING_JAE_URL:
      return { fetchingJaeUrl: true }
    case FINISHED_FETCHING_JAE_URL:
      return { fetchingJaeUrl: false }
    default:
      return state
  }
}

export default UpdateFetchStatus
