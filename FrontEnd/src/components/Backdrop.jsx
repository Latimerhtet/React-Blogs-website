import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Backdrop = ({ title, description, signout, notSignout }) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={signout}>
            Yes
          </Button>
          <Button color="secondary" onClick={notSignout}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Backdrop;
