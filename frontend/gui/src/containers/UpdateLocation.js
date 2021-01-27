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
import { connect } from 'react-redux';
import { update_Location, auth, loadUser } from '../store/actions/auth';
import { withRouter } from 'react-router-dom';




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




class UpdateLocation extends React.Component {

  static propTypes = {
    update_PersonalInfo: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

    state = {
      loadings: [],
      ModalText: 'PersonalInfo',
      visible: false,
      confirmLoading: false,

       user_ID:"",
       address_line:"",
       zip_code:"",
       state:" ",
       country: " ",

    };


    showModal = () => {
      this.setState({
        visible: true,
        address_line: this.props.address_line,
        zip_code: this.props.zip_code,
        state: this.props.state,
        user_ID: this.props.userID,
        country: this.props.country,
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
        address_line,
        zip_code,
         state,
         country,
        } = this.state;
        const update = {
            user_ID,
            address_line,
            zip_code,
             state,
             country,
        };
        this.props.update_Location(update);
        this.props.history.push('/dashboard/');
        this.props.loadUser();
      
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
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Edit
          </Button>
          <Modal
            title="Location Info"
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
            <img src={require('../../src/media/location.jpg')} alt="Personal" width="200" height="200" style ={{float:"left",  margin:"12px 4px 0 0"}}/>
            <Form.Item
              name={['address_line', 'name']}
              label="Address "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="address_line"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.address_line}

               />
            </Form.Item>
           
            <Form.Item
              name={['zip_code', 'name']}
              label="Zip code"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="zip_code"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.zip_code}

               />
            </Form.Item>

            <Form.Item
              name={['state', 'name']}
              label="State "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="state"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.state}

               />
            </Form.Item>

            <Form.Item
              name={['country', 'name']}
              label="Country "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="country"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.country}

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
      );
    };
}
  
  
  const mapStateToProps = (state) => ({
    userData: state.auth,

  });
  
  
//export default UpdatePersonalInfo;
export default withRouter(connect(mapStateToProps, { update_Location, loadUser })(UpdateLocation));
