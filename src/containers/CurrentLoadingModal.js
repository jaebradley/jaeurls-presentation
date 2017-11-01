import { connect } from 'react-redux';

import LoadingModal from '../components/LoadingModal';

const mapStateToProps = (state) => {
  return {
    isFetching: state.UpdateFetchStatus.fetchingJaeUrl,
  };
}

const CurrentLoadingModal = connect(
  mapStateToProps,
  null
)(LoadingModal);

export default CurrentLoadingModal;
