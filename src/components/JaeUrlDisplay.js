import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Alert,
  Button,
  Container,
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
    this.setState({
      jaeUrl: props.jaeUrl,
    });
  }

  getButtonText() {
    return this.state.copied ? 'Copied' : 'Copy';
  }

  onCopy() {
    this.setState({
      copied: true
    });

    this.showAlert();
  }

  showAlert() {
    this.msg.show(`Copied ${this.state.jaeUrl} to clipboard`, {
      time: 2000,
      type: 'success',
    });
  }

  render() {
    if (!!this.state.jaeUrl) {
      const alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

      return (
          <div>
            <h5>Created Jae URL</h5>
            <Row>
              <Col>
                <Alert color={'info'}>
                  <Button color={'link'} href={this.state.jaeUrl} target={'_blank'}>{this.state.jaeUrl}</Button>
                  <CopyToClipboard
                    text={this.state.jaeUrl}
                    onCopy={this.onCopy.bind(this)}>
                      <Button className={'jae-url-copy-button'}>{this.getButtonText()}</Button>
                    </CopyToClipboard>
                </Alert>
                <AlertContainer ref={a => this.msg = a} {...alertOptions} />
              </Col>
            </Row>
          </div>
      )
    }

    return null;
  }
};

export default JaeUrlDisplay;
