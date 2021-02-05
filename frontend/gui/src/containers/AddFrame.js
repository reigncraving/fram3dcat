import React, { Component } from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  Upload,
  Select
} from 'antd';
import {
   UploadOutlined,
   WarningTwoTone,
 } from '@ant-design/icons';

 import PropTypes from 'prop-types';
 import { useDispatch } from "react-redux";
 import { connect } from 'react-redux';
 import { auth, createFrame } from '../store/actions/auth';
 import { withRouter } from 'react-router-dom';
 import { createMessage } from '../store/actions/messages';
 import ImageUploader from '../components/ImageUploader'

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },

};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 3,
    },
    sm: {
      span: 16,
      offset: 18,
    },
  },
};


const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


const validateMessages = {
  required: '${label} is required!',

};


class AddFrame extends React.Component {
  static propTypes = {
    update_PersonalInfo: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

    state = {
      loadings: [],
      ModalText: 'PersonalInfo',
      visible: false,
      confirmLoading: false,

       title:"",
       description:"",
       user_ID:"",
       frameFile:" ",
       framePicture: " ",
    };


    showModal = () => {
      this.setState({
        visible: true,
      });
    };

    handleOk = () => {
      this.setState({

        confirmLoading: true,
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
    };

    handleCancel = () => {
      console.log('Clicked cancel button');
      this.setState({
        visible: false,
      });
    };


    onSubmit = (e) => {
      //e.preventDefault();
      this.setState({
        confirmLoading: true,
        user_ID: this.props.userData.id
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
      const {
          title,
          description,
          user_ID,
          frameFile,
          framePicture,
        } = this.state;

        let form_data = new FormData();
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('author', this.state.user_ID);
        form_data.append('frameFile', this.state.frameFile);
        form_data.append('frame_picture', this.state.framePicture);


        this.props.createFrame(form_data);
        this.props.createMessage({ updateSuccesfull: 'Frame Created' });
        //this.props.history.push('/dashboard/');
        //this.props.loadUser();

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
        }, 6000);
      };


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//for multiselect
    handleChange = (value) => {
      console.log(`selected ${value}`);
    };


    handleImageChange = (e) => {
    this.setState({
      framePicture: e.target.files[0],
    })
    };

    handleFileChange = (e) => {
    this.setState({
      frameFile: e.target.files[0],
    })
    };


    render() {
      const { visible, confirmLoading, ModalText } = this.state;
      const { loadings } = this.state;
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Add Frame
          </Button>
          <Modal
            title="New Frame"
            visible={visible}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            width="70%"
            confirmLoading={confirmLoading}
            footer=" "
          >

          <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onSubmit}
          validateMessages={this.validateMessages}>

            <Form.Item
              name={['title']}
              label="Title "
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="title"
                className="form-control"
                onChange={this.onChange}
               />
            </Form.Item>

            <Form.Item
              name={['description']}
              label="Short description "
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="description"
                className="form-control"
                onChange={this.onChange}
               />
            </Form.Item>


            <Form.Item
              name={['frameFile']}
              label="Frame file "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <input type="file"
                     id="frameFile"
                     accept="application/glb"
                     onChange={this.handleFileChange} required
                     style={{color: "blue",  }}
                     />
              <span style={{color:'#8D8BFF'}}>
                   <br/>
              <WarningTwoTone/>
              <b Style={{color:"#8BC7FF"}}>Only glTF-Binary files supported (*.glb)</b>
              </span>
            </Form.Item>

            <Form.Item
              name={['framePicture']}
              label="Frame Screenshot "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <input type="file"
                     id="framePicture"
                     accept="image/png, image/jpeg"  onChange={this.handleImageChange} required
                     style={{color: "blue",  }}
                     />
                     <br/>
                     <span style={{color:'#8D8BFF'}}>
                     <b Style={{color:"#8BC7FF"}}>*.png, *.jpg</b>
                     </span>
            </Form.Item>



            <Form.Item {...tailFormItemLayout}>
              <Button style={{marginRight:"10px"}} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Add Frame
              </Button>
              <Button onClick={this.handleCancel}>
                Cancel
              </Button>
            </Form.Item>
            </Form>

          </Modal>
        </>
      );
    };
}


  const mapStateToProps = (state) => ({
    userData: state.auth,

  });


//export default UpdatePersonalInfo;
export default withRouter(connect(mapStateToProps,  { createFrame, createMessage })(AddFrame));
