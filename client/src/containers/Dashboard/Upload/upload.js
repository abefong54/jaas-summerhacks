//THIS IS THE MODAL CODE
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'black',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color:'#87cefa' ,
    height: 48,
    width: 140,
    padding: '0 30px',
    weight: 'bold',
    
  },
});


function MyVerticallyCenteredModal(props) {
    const styles=useStyles();
  
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
          <Button className={styles.root}onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function UploadModal() {

    const styles=useStyles();

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button className={styles.root}variant="primary" onClick={() => setModalShow(true)}>
          UPLOAD
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default UploadModal