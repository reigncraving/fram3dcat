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
   UploadOutlined
 } from '@ant-design/icons';

import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { update_PersonalInfo, auth, loadUser } from '../store/actions/auth';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../store/actions/messages';



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






const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};




class UpdatePersonalInfo extends React.Component {

  // static propTypes = {
  //   update_PersonalInfo: PropTypes.func.isRequired,
  //   isAuthenticated: PropTypes.bool,
  // };

    state = {
      loadings: [],
      ModalText: 'PersonalInfo',
      visible: false,
      confirmLoading: false,

       user_ID:"",
       first_name:"",
       last_name:"",
       website:" ",
       is_designer: false,

    };


    showModal = () => {
      this.setState({
        visible: true,
        first_name: this.props.firstName,
        last_name: this.props.lastName,
        website: this.props.website,
        user_ID: this.props.userID,
        is_designer: this.props.is_designer,
      });
    };

    handleOk = () => {
      this.setState({
        ModalText: 'The modal will be closed after two seconds',
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
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true,
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
      const {
        user_ID,
        first_name,
        last_name,
        website,
        } = this.state;
        const update = {
          user_ID,
          first_name,
          last_name,
          website,
        };
        //this.props.update_PersonalInfo(update);
        this.props.update_PersonalInfo(update);
        this.props.createMessage({ updateSuccesfull: 'Update succesfull' });
        //this.props.loadUser();
        //this.props.history.push('/dashboard/');

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

    render() {
      const { visible, confirmLoading, ModalText } = this.state;
      const { loadings } = this.state;
      const {is_designer } = this.state;

      const designerView = (
        <>
          <Button type="primary" onClick={this.showModal}>
            Edit
          </Button>
          <Modal
            title="Personal Info"
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
            <img src={require('../../src/media/personal.jpg')} alt="Personal" width="200" height="200" style ={{float:"left",  margin:"12px 4px 0 0"}}/>
            <Form.Item
              name={['first_name', 'name']}
              label="First name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="first_name"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.firstName}

               />
            </Form.Item>

            <Form.Item
              name={['last_name', 'name']}
              label="Last name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="last_name"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.lastName}

               />
            </Form.Item>

            <Form.Item
              name={['website', 'name']}
              label="Website"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="website"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.website}

               />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button style={{marginRight:"10px"}} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Update
              </Button>
              <Button onClick={this.handleCancel}>
                Cancel
              </Button>
            </Form.Item>
            </Form>

          </Modal>
        </>

      )

      const companyView = (
        <>
          <Button type="primary" onClick={this.showModal}>
            Edit
          </Button>
          <Modal
            title="Info"
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
            <img src={require('../../src/media/company.jpg')} alt="company" width="100" height="100" style ={{float:"left",  margin:"12px 4px 0 0"}}/>

            <Form.Item
              name={['website', 'name']}
              label="Website"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="website"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.website}

               />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button style={{marginRight:"10px"}} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Update
              </Button>
              <Button onClick={this.handleCancel}>
                Cancel
              </Button>
            </Form.Item>
            </Form>

          </Modal>
        </>
      )
      return (
        <>
        {is_designer ? designerView : companyView}
        </>
      );
    };
}


  const mapStateToProps = (state) => ({
    userData: state.auth,

  });


//export default UpdatePersonalInfo;
export default withRouter(connect(mapStateToProps, { update_PersonalInfo, createMessage })(UpdatePersonalInfo));
