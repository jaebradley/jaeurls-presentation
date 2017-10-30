import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'react-form';
const ValidUrl = require('valid-url');

class UriForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidUri: props.isValidUri,
    };
  }

  errorValidator(values) {
    return {
      uri: !values.uri || !ValidUrl.isUri(values.uri) ? 'URI is a required field' : null
    }
  }

  onUriChange(event) {
    const {
      onUriChange,
    } = this.props;

    onUriChange(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();

    console.log(event.target);
  }

  render() {
    return (
      <div>
        <Form
          validateError={this.errorValidator.bind(this)}
          asyncValidators={this.uriValidation}
        >
          { formApi => (
            <form onSubmit={this.onSubmit.bind(this)}>
              <label>URI</label>
              <Text
                field={'uri'}
                id={'uri'}
                onChange={this.onUriChange.bind(this)}
              />
            </form>
          )}
        </Form>
      </div>
    )
  }
};

export default UriForm;
