import React, { Component } from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
} from 'antd';
import {
   UploadOutlined,
   WarningTwoTone,
 } from '@ant-design/icons';

 import PropTypes from 'prop-types';
 import { useDispatch } from "react-redux";
 import { connect } from 'react-redux';
 import { auth, deleteJob } from '../store/actions/auth';
 import { withRouter } from 'react-router-dom';
 import { createMessage } from '../store/actions/messages';
 import ImageUploader from '../components/ImageUploader'

 const layout = {
   labelCol: {
     span: 2,
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

class DeleteJob extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

    state = {
      loadings: [],
      ModalText: 'Delete',
      visible: false,
      confirmLoading: false,
    };




    showModal = () => {
      this.setState({
        visible: true,
        title: " ",
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
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);

        const job_ID = this.props.data.id;
        this.props.deleteJob(job_ID);
        this.props.createMessage({ deleteSuccess: 'Job Deleted' });
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
      upload_image: true,
      framePicture: e.target.files[0],
    })
    };

    handleFileChange = (e) => {
    this.setState({
      upload_file: true,
      frameFile: e.target.files[0],
    })
    };


    render() {
      const { visible, confirmLoading, ModalText } = this.state;
      const { loadings } = this.state;
      return (
        <>
          <Button type="danger" onClick={this.showModal}>
            Delete
          </Button>
          <Modal
            title="Delete Job"
            visible={visible}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            width="50%"
            confirmLoading={confirmLoading}
            footer=" "
          >

          <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onSubmit}
          validateMessages={this.validateMessages}>



              Are you sure you want to delete <b>{this.props.data.headline}</b> post?
              <Form.Item>
              </Form.Item>
              <br/>
            <Form.Item
              label="Post:"
            >
                <p style={{border: "5px solid darkgray"}}>{this.props.data.body_text}</p>
            </Form.Item>
            <Form.Item>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button style={{marginRight:"10px"}} type="danger" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                delete
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
export default withRouter(connect(mapStateToProps,  { deleteJob, createMessage })(DeleteJob));
