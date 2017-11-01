import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalHeader,
  ModalBody
 } from 'reactstrap'
 import Loading from 'react-loading-animation'

const LoadingModal = (props) => {
  const {
    isFetching,
  } = props;

  return (
    <Modal isOpen={isFetching}>
      <ModalHeader>
        <h2>Fetching your Jae URL!</h2>
      </ModalHeader>
      <ModalBody>
        <Loading isLoading={isFetching} />
      </ModalBody>
    </Modal>
  )
}

LoadingModal.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default LoadingModal;
