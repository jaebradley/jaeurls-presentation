import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Alert,
  Button,
  Row,
  Col
} from 'reactstrap';
import AlertContainer from 'react-alert';

class JaeUrlDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jaeUrl: props.jaeUrl,
      copied: false,
    };
  }

  componentWillReceiveProps(props) {
    const {
      jaeUrl,
      isFetching
    } = props;

    this.setState({ jaeUrl });

    if (isFetching) {
      this.setState({ copied: false });
    }
  }

  getButtonText() {
    return this.state.copied ? 'Copied' : 'Copy';
  }

  onCopy() {
    this.setState({ copied: true });
    this.showAlert();
  }

  showAlert() {
    this.msg.show(`Copied ${this.state.jaeUrl} to clipboard`, {
      time: 2000,
      type: 'success',
    });
  }

  render() {
    if (this.state.jaeUrl.length > 0) {
      return (
          <div>
            <h5>Created Jae URL</h5>
            <Row>
              <Col>
                <Alert color={'info'}>
                  <Button
                    color={'link'}
                    href={this.state.jaeUrl}
                    target={'_blank'}
                  >{this.state.jaeUrl}</Button>
                  <CopyToClipboard
                    text={this.state.jaeUrl}
                    onCopy={this.onCopy.bind(this)}>
                      <Button className={'jae-url-copy-button'}>{this.getButtonText()}</Button>
                    </CopyToClipboard>
                </Alert>
                <AlertContainer
                  ref={a => this.msg = a}
                  offset={14}
                  position={'top left'}
                  theme={'dark'}
                  time={5000}
                  transition={'scale'}
                />
              </Col>
            </Row>
          </div>
      );
    }

    return null;
  }
}

JaeUrlDisplay.propTypes = {
  jaeUrl: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default JaeUrlDisplay;
