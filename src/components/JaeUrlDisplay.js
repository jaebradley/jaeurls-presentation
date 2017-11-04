/* @flow */

import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Alert,
  Button,
  Row,
  Col
} from 'reactstrap';
import AlertContainer from 'react-alert';

type JaeUrlDisplayPropsType = {
  jaeUrl: string,
  isFetching: boolean
};

type JaeUrlDisplayStateType = {
  jaeUrl: string,
  copied: boolean
};

class JaeUrlDisplay extends React.Component<JaeUrlDisplayPropsType, JaeUrlDisplayStateType> {
  state: JaeUrlDisplayStateType;

  constructor(props: JaeUrlDisplayPropsType) {
    super(props);

    this.state = {
      jaeUrl: props.jaeUrl,
      copied: false,
    };
  }

  componentWillReceiveProps(nextProps: JaeUrlDisplayPropsType) {
    const {
      jaeUrl,
      isFetching
    } = nextProps;

    this.setState({ jaeUrl });

    if (isFetching) {
      this.setState({ copied: false });
    }
  }

  getButtonText(): string {
    return this.state.copied ? 'Copied' : 'Copy';
  }

  onCopy() {
    this.setState({ copied: true });
    this.showAlert();
  }

  showAlert() {
    // $FlowFixMe
    this.msg.show(`Copied ${this.state.jaeUrl} to clipboard`, {
      time: 2000,
      type: 'success',
    });
  }

  render(): React.Node {
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
                  // $FlowFixMe
                  ref={a => this.msg = a} // eslint-disable-line
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

export default JaeUrlDisplay;
