import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  render() {
    if (!!this.state.jaeUrl) {
      return (
        <div>
          <a href={this.state.jaeUrl} target={'_blank'}>{this.state.jaeUrl}</a>
          <CopyToClipboard
            text={this.state.jaeUrl}
            onCopy={() => this.setState({copied: true})}>
              <button>Copy to clipboard</button>
          </CopyToClipboard>

          {this.state.copied ? <span style={{color: 'red'}}>Copied</span> : null}
        </div>
      )
    }

    return null;
  }
};

export default JaeUrlDisplay;
