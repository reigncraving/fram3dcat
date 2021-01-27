import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../store/actions/auth';

import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, UnlockOutlined, EyeInvisibleOutlined, EyeTwoTone, WarningOutlined  } from '@ant-design/icons';

const errorMsg= (
  <>
  <h1 id='errorTitle' style={{color:'#C13349'}}>
    <WarningOutlined style={{ fontSize:'20px', color:'#C13349' }}/>"Your username or password are uncorrect!"
  </h1>
  </>
);

const errorDisplay = false;

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };


  onSubmit = (e, errorDisplay) => {
    //e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    //errormsg
    if (!this.props.isAuthenticated) {
      errorDisplay = true;
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    //if user is auth. redirect to....
    if (this.props.isAuthenticated) {
      return <Redirect to="/designers" />;
    }
    const { username, password } = this.state;
    return (
      <Form style={{marginTop:"200px"}} onFinish={this.onSubmit}>
        <Card
          hoverable
          extra={<b style={{fontSize:"14pt"}}>Login</b>}
          style={{  width: "80%", left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', marginTop:'90px',}}
          >
          <Form.Item
            style={{marginTop:"30px"}}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
           >
           <Input
             size="large" placeholder="username"
             prefix={<UserOutlined />}
             type="text"
             className="form-control"
             name="username"
             onChange={this.onChange}
             value={username}
           />
         </Form.Item>

         <Form.Item
           style={{marginTop:"30px"}}
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
              prefix={<UnlockOutlined/>}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              type="password"
              className="form-control"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </Form.Item>

            <Button type="primary" htmlType="submit">
              Login
            </Button>
          <span style={{marginLeft: '10px'}}>or</span>
          <Link style={{marginRight: '70px'}}
            to='/register/'> Register
          </Link>
        </Card>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
