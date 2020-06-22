//THIS IS THE MODAL CODE
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap'

import S3 from 'react-aws-s3';
// import S3FileUpload from 'react-s3'

import { uploadFile } from 'react-s3'

const config = {
  bucketName: 's3-bucket-v2',
  dirName: 'test-send',
  region: 'us-east-2',
  accessKeyId: '',
  secretAccessKey: ' '
}

class UploadModal extends Component {
  constructor() {
    super()
    this.state = {
      testFlie: 'testing',
      modalShow: false,
      file: null,
      value: '',
      config: {
        bucketName: 's3-bucket-v2',
        dirName: 'test-send',
        region: 'us-east-2',
        accessKeyId: 'AKIA3ENAIKTKZUXDR5EH',
        secretAccessKey: ' 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'
      }
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  showModal() {
    this.setState({ modalShow: true })
  }
  hideModal() {
    this.setState({ modalShow: false })
  }

  uploadIT = () => {
    console.log("uploading files");
    // S3FileUpload
    //   .uploadFile(this.state.file, config)
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err))
    
    const ReactS3Client = new S3(config);
    ReactS3Client
    .uploadFile(this.state.file, this.testFlie)
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }
  // handleFileUpload = event => {
  //   this.state.file = event.target.files[0];
  //   console.log("file is here");
  // }
  handleFileUpload(event) {
    this.setState({ value: event.target.value });
    this.setState({ file: event.target.files[0] })
    // this.state.file = event.target.files[0];
    console.log(event.target.files[0]);
  }
  render() {
    return (
      <>
        <Modal
          show={this.state.modalShow}
          onHide={this.hideModal}
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
            <input type='file' onChange={this.handleFileUpload} />
          </Modal.Body>
          <Modal.Footer>
            {/* for now it just closes the modal */}
            <Button onClick={this.uploadIT}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={this.showModal}>
          Upload
        </Button>
      </>
    );
  }
}

export default UploadModal
