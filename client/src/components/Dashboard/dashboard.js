import React, { Component } from 'react';
// import { UploadModal } from './upload/upload'
import UploadModal from './upload/upload'
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonToolbar } from 'react-bootstrap';


class Dashboard extends Component {

    // INITIALIZE DEFAULT STATE
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "", "other": "other stuff",
            show: false
        };
    }

    // FETCH DATA
    callAPI() {
        fetch("http://localhost:9000/resources/dashboard")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res["classes"] }))
            .catch(err => err);
    }

    // ONCE COMPONENT MOUNTS, CALL API
    conponentDidMount() {
        this.callAPI();
    }

    setModalOpen() {
        this.setState({ show: true });
    }

    setModalClose() {
        this.setState({ show: false })
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <UploadModal />
                <p className="App-intro">
                    {this.state.apiResponse}
                    {this.state.other}
                    hiii
                </p>
            </div>
        );
    }

}

export default Dashboard;