//THIS IS THE MODAL CODE
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap'
import S3 from 'react-aws-s3';
import { makeStyles } from '@material-ui/core/styles'
import CicularProgress from '@material-ui/core/CircularProgress'
import { uploadFile } from 'react-s3'
import './Upload.css'
import swal from 'sweetalert'
import config from '../../config.json'

import CircularIndeterminate from '../ProgressBar/CircularIndeterminate'

const ReactS3Uploader = require('react-s3-uploader');

class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressShow: false,
      response: '',
      post: '',
      responseToPost: '',
      modalShow: false,
      file: null,
      date: '',
      class: '',
      lecture: '',
      fileName: '',
      config: {
        bucketName: 's3-bucket-v2',
        region: 'us-east-2',
        accessKeyId: config.aws_access_key_id,
        secretAccessKey: config.aws_secret_access_key,
      }
    }
  }

  showModal = () => {
    this.setState({ modalShow: true });
  }
  hideModal = () => {
      this.setState({ progressShow: false });
      this.setState({ modalShow: false });
  }

  dateChange = (event) =>{
    console.log(event.target.value);
    this.setState({ date: event.target.value });
  }

  classChange = (event) =>{
    console.log(event.target.value);
    this.setState({ class: event.target.value });
  }

  lectureChange = (event) =>{
    console.log(event.target.value);
    this.setState({ lecture: event.target.value });
  }

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  }

  concatFileName = () => {
  }

  uponSuccessfulUpload = data => {
    if (data.status === 204) {
      this.setState({ progressShow: false });
    }
    swal("File Uploaded", "", "success");
    console.log(data);
    this.setState({ modalShow: false });
  }

  handleFileUpload = () => {
    const file_name = this.state.date + '-' + this.state.class + '-' + this.state.lecture;
    this.setState({ fileName: file_name });
    
    this.setState({ progressShow: true });
    console.log("uploading " + file_name);

    const ReactS3Client = new S3(this.state.config);
    ReactS3Client
      .uploadFile(this.state.file, file_name)
      .then(data => this.uponSuccessfulUpload(data))
      .catch(err => console.error(err));
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
            <p>Upload Lecture Video</p>
            <input type='file' onChange={this.handleFileChange} />
            <div className="file-name-div">
              <p>Enter lecture date: </p>
              <input type='text' placeholder="mmddyy" onChange={this.dateChange} />
              <p>Enter class name: </p>
              <input type='text' placeholder="Class Name" onChange={this.classChange} />
              <p>Enter lecture name: </p>
              <input type='text' placeholder="Lecture Name" onChange={this.lectureChange} />
            </div>
            {this.state.progressShow && <CircularIndeterminate />}
          </Modal.Body>
          <Modal.Footer>
            {/* for now it just closes the modal */}
            <Button onClick={this.handleFileUpload}>Save Changes</Button>
            {/* <Button onClick={this.checkEmpty}>Check</Button> */}
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
