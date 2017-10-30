import { connect } from 'react-redux';

import JaeUrlDisplay from '../components/JaeUrlDisplay';

const mapStateToProps = (state) => {
  return {
    jaeUrl: state.UpdateJaeUrl.jaeUrl,
  };
}

const CurrentJaeUrlDisplay = connect(
  mapStateToProps,
  null
)(JaeUrlDisplay);

export default CurrentJaeUrlDisplay;
