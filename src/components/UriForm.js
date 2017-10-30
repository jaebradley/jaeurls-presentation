import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'react-form';

class UriForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidUri: props.isValidUri,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      isValidUri: props.isValidUri,
    });
  }

  onUriChange(event) {
    const {
      onUriChange,
    } = this.props;

    onUriChange(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.isValidUri) {
      const uri = event.target.children[1].value;
      this.props.onSubmit(uri);
    }
  }

  render() {
    return (
      <div>
        <Form>
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
