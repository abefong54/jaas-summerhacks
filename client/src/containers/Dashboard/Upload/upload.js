//THIS IS THE MODAL CODE
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload a Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Add other stuff</p>
        </Modal.Body>
        <Modal.Footer>
            {/* for now it just closes the modal */}
          <Button onClick={props.onHide}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function UploadModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Upload
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default UploadModal