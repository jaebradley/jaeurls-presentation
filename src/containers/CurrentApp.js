import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    isUriValid: state.UpdateUriValidity.isUriValid,
  };
};

const CurrentApp = connect(
  mapStateToProps,
  null
)(App);

export default CurrentApp;
