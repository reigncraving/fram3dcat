import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePassword } from '../store/actions/auth';
import { createMessage } from '../store/actions/messages';

import { Form, Input, Button, Card, Tabs } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';


const designer = true;

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};


class UpdatePass extends Component {

  state = {
    old_password: '',
    new_password: '',
    new_password2: '',
    token: ' ',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    //e.preventDefault();
    this.setState(
      {
        token: this.props.auth.token,
      });
    console.log(this.state.token);
    const {
      old_password,
      new_password,
      new_password2,
      token, } = this.state;
    if (old_password == new_password) {
      this.props.createMessage({ passwordNotMatch: 'New password and old passwords are the same!' });
    } else if ( new_password != new_password2){

      this.props.createMessage({ passwordNotMatch: 'Please confirm new password!' });
    }

      else {
      const updateUser = {
        old_password,
        new_password,
        token,
      };
      this.props.updatePassword(updateUser);
      this.props.createMessage({ updateSuccesfull: 'Password updated succesfully' });
      this.props.history.push('/dashboard/');
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { old_password, new_password, new_password2 } = this.state;
    return (
      <Form {...layout} onFinish={this.onSubmit}>
        <Card
          hoverable
        //  extra="Register"
          style={{marginTop:"0px", width: "92%", left: '4%', top: '2%' }}
          >
            <Form.Item
               style={{marginTop:"30px"}}
               label="Old Password"
               name="old_password"
               rules={[
                   {
                     required: true,
                     message: 'Please input your old password!',
                   },
                 ]}
                >
                <Input.Password
                  size="large" placeholder="old password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  type="password"
                  name="old_password"
                  onChange={this.onChange}
                  value={old_password}
                />
              </Form.Item>



              <Form.Item
                 style={{marginTop:"30px"}}
                 label="new Password"
                 name="new_password"
                 rules={[
                     {
                       required: true,
                       message: 'Please input your new password!',
                     },
                   ]}
                  >
                  <Input.Password
                    size="large" placeholder="new password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type="password"
                    name="new_password"
                    onChange={this.onChange}
                    value={new_password}
                  />
                </Form.Item>


              <Form.Item
             name="new_password2"
             label="Confirm your new password"
             dependencies={['new_password']}
             hasFeedback
             rules={[
               {
                 required: true,
                 message: 'Please enter your new password!',
               },
               ({ getFieldValue }) => ({
                 validator(rule, value) {
                   if (!value || getFieldValue('new_password') === value) {
                     return Promise.resolve();
                   }

                   return Promise.reject('The new passwords you entered do not match!');
                 },
               }),
             ]}
           >
             <Input.Password
             size="large"
             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
             type="password"
             name="new_password2"
             onChange={this.onChange}
             value={new_password2}
             />
             </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ marginBottom: "20px"}} onClick ={this.onSubmit}>
              Update
            </Button>

          </Form.Item>
      </Card>
     </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { updatePassword, createMessage })(UpdatePass);
