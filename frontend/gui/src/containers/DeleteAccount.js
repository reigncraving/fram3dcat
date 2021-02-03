import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAccount } from '../store/actions/auth';
import { createMessage } from '../store/actions/messages';
import { logout } from '../store/actions/auth';
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


class DeleteAccount extends Component {

  state = {
    deleteWord: '',
    //user_ID: ' ',
    password: ' ',
    //username: ' ',
    //email: ' ',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    //e.preventDefault();
    this.setState(
      {
        user_ID: this.props.auth.id,
        //username: this.props.auth.username,
        //email: this.props.auth.email,
      });
    //console.log(this.state.id);
    const {
      deleteWord,
    //  user_ID,
    //  username,
    //  email,
      password,
      } = this.state;
  //  const { user_ID } = this.props.auth.id
    if (deleteWord != "DELETE") {
      this.props.createMessage({ passwordNotMatch: 'Please confirm by typing DELETE!' });
    //  alert(this.state.user_ID)
    } else{
      const deleteUser = {
      //  user_ID,
      //  username,
    //    email,
        password,
      };
      this.props.deleteAccount(deleteUser);
      this.props.createMessage({ updateSuccesfull: 'Account deleted succesfully' });
      this.props.history.push('/designers/');
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {

    const { isAuthenticated, user } = this.props.auth;
    const { deleteWord, password} = this.state;
    return (
      <Form {...layout} onFinish={this.onSubmit}>
        <Card
          hoverable
        //  extra="Register"
          style={{marginTop:"0px", width: "92%", left: '4%', top: '2%' }}
          >

            <Form.Item
               style={{marginTop:"30px"}}
               label="please enter DELETE to comfirm"
               name="deleteWord"
               rules={[
                   {
                     required: true,
                     message: 'Please enter delete to comfirm deletion of your account!',
                   },
                 ]}
                >

                <Input
                  size="large" placeholder="..."
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  type="input"
                  name="deleteWord"
                  onChange={this.onChange}
                  value={deleteWord}
                />
              </Form.Item>

              <Form.Item
                 style={{marginTop:"30px"}}
                 label="Password"
                 name="password"
                 rules={[
                     {
                       required: true,
                       message: 'Please input your password!',
                     },
                   ]}
                  >
                  <Input.Password
                    size="large" placeholder="password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="danger" htmlType="submit" style={{ marginBottom: "20px"}} onClick ={this.onSubmit}>
              Delete
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

export default connect(mapStateToProps, { deleteAccount, createMessage, logout })(DeleteAccount);
