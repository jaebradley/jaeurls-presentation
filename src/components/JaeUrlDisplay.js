import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Alert, Button } from 'reactstrap';

class JaeUrlDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jaeUrl: props.jaeUrl,
      copied: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      jaeUrl: props.jaeUrl,
    });
  }

  getAlertColor() {
    return this.state.copied ? 'success' : 'danger';
  }

  getButtonText() {
    return this.state.copied ? 'Copied' : 'Copy To Clipboard';
  }

  render() {
    if (!!this.state.jaeUrl) {
      return (
        <div>
          <a href={this.state.jaeUrl} target={'_blank'}>{this.state.jaeUrl}</a>
          <CopyToClipboard
            text={this.state.jaeUrl}
            onCopy={() => this.setState({copied: true})}>
              <Alert color={this.getAlertColor()}>
                <Button>{this.getButtonText()}</Button>
              </Alert>
          </CopyToClipboard>
        </div>
      )
    }

    return null;
  }
};

export default JaeUrlDisplay;
