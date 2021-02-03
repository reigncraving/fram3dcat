import React, { useState } from 'react';
import { Upload, Button, Form } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  auth, uploadFile } from '../store/actions/auth';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../store/actions/messages';


class ImageUploader extends React.Component {

  static propTypes = {
     auth: PropTypes.object.isRequired,
   };

  state = {
avatar: null,
  user_ID: "",
  loadings: [],
  confirmLoading: false,
};

enterLoading = index => {
  this.setState(({ loadings }) => {
    const newLoadings = [...loadings];
    newLoadings[index] = true;

    return {
      loadings: newLoadings,
    };
  });
  setTimeout(() => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = false;

      return {
        loadings: newLoadings,
      };
    });
  }, 3000);
};


handleChange = (e) => {
this.setState({
  [e.target.id]: e.target.value
})
};

handleImageChange = (e) => {
this.setState({
  avatar: e.target.files[0],
})
};

handleSubmit = (e) => {
//e.preventDefault();

this.setState({
  confirmLoading: true,
  user_ID: this.props.userData.id
});
setTimeout(() => {
  this.setState({
    confirmLoading: false,
  });
}, 1000);

console.log(this.state.user_ID);
let form_data = new FormData();
form_data.append('avatar', this.state.avatar);
const {user_ID} = this.state;
let url = 'http://127.0.0.1:8000/accounts/auth/update/avatar/' + user_ID;

this.props.uploadFile(url, form_data);
this.props.createMessage({ updateSuccesfull: 'Avatar updated succesfully' });
// axios.put(url, form_data, {
//   headers: {
//     'content-type': 'multipart/form-data'
//   }
// })
//     .then(res => {
//
//     })
//     .catch(err => console.log(err))
};




  render() {
    const { loadings } = this.state;
    return (

            <div className="App">
            <Form onFinish={this.handleSubmit}>
              <p>
                <input type="file"
                       id="avatar"
                       accept="image/png, image/jpeg"  onChange={this.handleImageChange} required
                       style={{color: "blue", }}
                       />
                </p>
              <Button type="submit" onSubmit={this.handleSubmit} htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>Upload</Button>
            </Form>
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.auth,

});


  export default withRouter(connect(mapStateToProps, { uploadFile, createMessage })(ImageUploader));;
