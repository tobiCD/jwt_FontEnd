import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModelDelete = ({ show, handleClose, ConfirmDeleteUser, dataModel }) => {

  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are sure to delete this user :  {dataModel && dataModel.email ? `Email: ${dataModel.email}` : 'No email provided'} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ConfirmDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelDelete;