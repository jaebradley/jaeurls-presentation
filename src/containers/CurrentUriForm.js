import { connect } from 'react-redux'

import { fetchJaeUrl, updateUriValidity } from '../actions';
import UriForm from '../components/UriForm'

const mapStateToProps = (state) => {
  return {
    isValidUri: state.UpdateUriValidity.isValidUri,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUriChange: (uri) => {
      dispatch(updateUriValidity(uri));
    },
    onSubmit: (uri) => {
      dispatch(fetchJaeUrl(uri));
    }
  };
}

const CurrentUriForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UriForm);

export default CurrentUriForm;
