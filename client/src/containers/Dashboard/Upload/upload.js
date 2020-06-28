//THIS IS THE MODAL CODE
import React, { Component } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD
import { Modal } from 'react-bootstrap'
import S3 from 'react-aws-s3';
import ReactS3Uploader from 'react-s3-uploader-multipart'
import { uploadFile } from 'react-s3'
import './upload.css'
import config from '../../config.json'
=======
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
>>>>>>> master

class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

<<<<<<< HEAD
      response: '',
      post: '',
      responseToPost: '',

      modalShow: false,
      file: null,
      valueName: '',
      config: {
        bucketName: 's3-bucket-v2',
        // url: 'https://s3-bucket-v2.s3-us-west-2.amazonaws.com/',
        dirName: 'test-send',
        region: 'us-east-2',
        accessKeyId: config.API_ACCESS_KEY,
        secretAccessKey: config.SECRET_ACCESS_KEY,
      }
    }
  }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('http://localhost:9000/resources/dashboard');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // }

  // handleApiPost = async e => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:9000/resources/dashboardPost', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });

  //   const body = await response.text();

  //   this.setState({ responseToPost: body });
  // }

  showModal = () => {
    this.setState({ modalShow: true })
  }
  hideModal = () => {
    this.setState({ modalShow: false })
  }

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
    // this.setState({ fileName: event.target.files[0].name });
  }

  handleTextChange = (event) => {
    console.log('file name: ' + event.target.value);
    this.setState({ fileName: event.target.value });
  }

  uponSuccessfulUpload = data => {
    console.log(data);
  }

  handleFileUpload = () => {

    console.log("uploading " + this.state.fileName);

    const ReactS3Client = new S3(this.state.config);
    ReactS3Client
      .uploadFile(this.state.file, this.state.fileName)
      .then(data => this.uponSuccessfulUpload(data))
      .catch(err => console.error(err))
  }

  // checkEmpty = () => {
  //   console.log(process.env.REACT_APP_API_ACCESS_KEY);
  //   // if (this.state.file === null) {
  //   //     console.log('shits empty')
  //   // } else {
  //   //     console.log(this.state.file)
  //   // }
  // }

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
            <input type='file' onChange={this.handleFileChange} />
            <div className="file-name-div">
              <p>File name: </p>
              <input type='text' onChange={this.handleTextChange}/>
            </div>

            {/* Stuff for testing api calls */}

            {/* <p>{this.state.response}</p>
            <form onSubmit={this.handleApiPost}>
              <p>
                <strong>Post to Server:</strong>
              </p>
              <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
            <p>{this.state.responseToPost}</p> */}
          </Modal.Body>
          <Modal.Footer>
            {/* for now it just closes the modal */}
            <Button onClick={this.handleFileUpload}>Save Changes</Button>
            {/* <Button onClick={this.checkEmpty}>Check</Button> */}
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={this.showModal}>
          Upload
=======
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
>>>>>>> master
        </Button>
      </>
    );
  }
}

export default UploadModal
