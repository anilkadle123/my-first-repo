import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalReact = ({
  triggerButtonLabel,
  title,
  body,
  continueLabel,
  cancelLabel,
  onCancel,
  onContinue,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = (param) => {
    setShow(false);

    param ? onCancel() : onContinue();
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {triggerButtonLabel}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose(true)}>
            {continueLabel}
          </Button>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            {cancelLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalReact;
