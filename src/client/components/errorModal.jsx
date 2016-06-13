import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ErrorModal = ({ showErrorModal, handleErrorModalClose }) => {
  return (
    <Modal show={showErrorModal} onHide={handleErrorModalClose}>
      <Modal.Header bsStyle="modal-header modal-header-success" closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Sorry, there was an error loading your Uber account information.</p>
        <p>Please try again later.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="primary" onClick={handleErrorModalClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
