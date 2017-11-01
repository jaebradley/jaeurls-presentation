import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Form,
  FormGroup,
  Input,
 } from 'reactstrap';
 import AlertContainer from 'react-alert';

class UrlForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidUrl: props.isValidUrl,
      inputUrlValue: props.inputUrlValue,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      isValidUrl: props.isValidUrl,
      inputUrlValue: props.inputUrlValue,
    });
  }

  onUrlChange(event) {
    this.props.onUrlChange(event.target.value);
  }

  getAlertColor() {
    return this.state.isValidUrl ? 'success' : 'danger';
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.isValidUrl) {
      this.props.onSubmit(this.state.inputUrlValue);
    } else {
      this.showAlert();
    }
  }

  showAlert() {
    this.msg.show('Submit a valid URL', {
      time: 2000,
      type: 'error',
    });
  }

  render() {
    const alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <FormGroup>
          <Alert color={this.getAlertColor()}>
            <Input
              placeholder={"Input a URL and get a shortened URL (...kind've)"}
              type={'text'}
              name={'url'}
              id={'url'}
              rows={1}
              onChange={this.onUrlChange.bind(this)}
            />
          </Alert>
          <AlertContainer ref={a => this.msg = a} {...alertOptions} />
        </FormGroup>
      </Form>
    )
  }
}

UrlForm.propTypes = {
  isValidUrl: PropTypes.bool.isRequired,
  inputUrlValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
}

export default UrlForm;
