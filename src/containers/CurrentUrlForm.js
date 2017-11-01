import { connect } from 'react-redux'

import { fetchJaeUrl, updateUrlValidity, updateInputUrlValue } from '../actions'
import UrlForm from '../components/UrlForm'

const mapStateToProps = (state) => {
  return {
    isValidUrl: state.UpdateUrlValidity.isValidUrl,
    inputUrlValue: state.UpdateInputUrlValue.inputUrlValue,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUrlChange: (url) => {
      dispatch(updateUrlValidity(url));
      dispatch(updateInputUrlValue(url));
    },
    onSubmit: (url) => {
      dispatch(fetchJaeUrl(url));
    }
  };
}

const CurrentUrlForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlForm);

export default CurrentUrlForm;
