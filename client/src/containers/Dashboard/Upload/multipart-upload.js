import React, { Component } from 'react'
var ReactS3Uploader = require('react-s3-uploader-multipart');

class MultipartUpload extends Component {


    render() {
        return (
            <div>
                <ReactS3Uploader
                    evaporateOptions={{
                        aws_key: 'AKIA3ENAIKTK2KB2V5HQ',
                        bucket: 's3-bucket-v2'
                    }}
                    signingUrl="http://localhost:9000/s3/sign"
                    signingUrlMethod="GET"
                    s3Path="/uploads/"
                    preprocess={this.onUploadStart}
                    onProgress={this.onUploadProgress}
                    onError={this.onUploadError}
                    onFinish={this.onUploadFinish}
                    signingUrlWithCredentials={false}      // in case when need to pass authentication credentials via CORS
                    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
                    scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                    server="http://cross-origin-server.com"
                    inputRef={cmp => this.uploadInput = cmp}
                    autoUpload={true}
                />
                {/* <input type="file" onChange={this.uploadFile} /> */}
            </div>
        );
    }
}

export default MultipartUpload