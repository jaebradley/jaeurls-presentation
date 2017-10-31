import { connect } from 'react-redux'

import { fetchJaeUrl, updateUriValidity, updateInputUrlValue } from '../actions';
import UriForm from '../components/UriForm'

const mapStateToProps = (state) => {
  return {
    isValidUri: state.UpdateUriValidity.isValidUri,
    inputUrlValue: state.UpdateInputUrlValue.inputUrlValue,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUriChange: (url) => {
      dispatch(updateUriValidity(url));
      dispatch(updateInputUrlValue(url));
    },
    onSubmit: (url) => {
      dispatch(fetchJaeUrl(url));
    }
  };
}

const CurrentUriForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UriForm);

export default CurrentUriForm;
