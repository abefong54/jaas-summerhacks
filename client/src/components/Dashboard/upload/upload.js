import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} className="model-content"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal Heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    Add other fields and selectors
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={props.onHide}>Upload</Button>
            </Modal.Footer>
        </Modal>
    )
}

function Upload() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>Upload</Button>

            <MyVerticallyCenteredModal show={modalShow}
                onHide={() => setModalShow(false)} />
        </>
    );
}


export default Upload