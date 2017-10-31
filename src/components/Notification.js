import React from 'react';
import AlertContainer from 'react-alert';

class Notification extends React.Component {
  showAlert = () => {
    this.msg.show(this.props.message, {
      time: 2000,
      type: 'success',
    })
  }

  componentDidUpdate() {
    this.showAlert();
  }

  render() {
    return (
      <AlertContainer
        offset={14}
        position={'top left'}
        theme={'dark'}
        time={5000}
        transition={'scale'}
        ref={a => this.msg = a} />
    );
  }
}

export default Notification;
