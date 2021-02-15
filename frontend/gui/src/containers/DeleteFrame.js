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
 import { connect } from 'react-redux';
 import { auth, deleteFrame } from '../store/actions/auth';
 import { withRouter } from 'react-router-dom';
 import { createMessage } from '../store/actions/messages';

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

class DeleteFrame extends React.Component {
  static propTypes = {
    update_PersonalInfo: PropTypes.func.isRequired,
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
        user_ID: this.props.userData.id
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);

        const frame_ID = this.props.data.id;
        this.props.deleteFrame(frame_ID);
        this.props.createMessage({ deleteSuccess: 'Frame Deleted' });
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

    render() {
      const { visible, confirmLoading, ModalText } = this.state;
      const { loadings } = this.state;
      return (
        <>
          <Button type="danger" onClick={this.showModal}>
            Delete
          </Button>
          <Modal
            title="Delete Frame"
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



              <p Style={{fontSize:"16pt"}}>Are you sure you want to delete <b>{this.props.data.title}</b></p> ?
              <Form.Item>
              </Form.Item>
              <br/>
            <Form.Item
              label="frame"
            >
                <img src = {this.props.data.frame_picture} width= "300px" style={{border: "5px solid darkgray"}}/>
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



export default withRouter(connect(mapStateToProps,  { deleteFrame, createMessage })(DeleteFrame));
