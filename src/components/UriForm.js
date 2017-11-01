import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Form,
  FormGroup,
  Input,
 } from 'reactstrap';
 import AlertContainer from 'react-alert';

class UriForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidUri: props.isValidUri,
      inputUrlValue: props.inputUrlValue,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      isValidUri: props.isValidUri,
      inputUrlValue: props.inputUrlValue,
    });
  }

  onUriChange(event) {
    const {
      onUriChange,
    } = this.props;

    onUriChange(event.target.value);
  }

  getAlertColor() {
    return this.state.isValidUri ? 'success' : 'danger';
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.isValidUri) {
      this.props.onSubmit(this.state.inputUrlValue);
    } else {
      this.showAlert();
    }
  }

  showAlert() {
    this.msg.show('Submit a valid URI', {
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
              name={'uri'}
              id={'uri'}
              rows={1}
              onChange={this.onUriChange.bind(this)}
            />
          </Alert>
          <AlertContainer ref={a => this.msg = a} {...alertOptions} />
        </FormGroup>
      </Form>
    )
  }
}

export default UriForm;
