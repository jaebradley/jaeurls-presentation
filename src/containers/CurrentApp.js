import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    isUrlValid: state.UpdateUrlValidity.isUrlValid,
  };
};

const CurrentApp = connect(
  mapStateToProps,
  null
)(App);

export default CurrentApp;
