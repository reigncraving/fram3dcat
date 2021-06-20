import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAccount } from '../../store/actions/auth';
import { createMessage } from '../../store/actions/messages';
import { logout } from '../../store/actions/auth';
import { Form, Input, Button, Card } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

class DeleteAccount extends Component {
  state = {
    deleteWord: '',
    password: ' ',
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
      });
    const {
      deleteWord,
      password,
    } = this.state;
    if (deleteWord !== "DELETE") {
      this.props.createMessage({ passwordNotMatch: 'Please confirm by typing DELETE!' });
    } else {
      const deleteUser = {
        password,
      };
      this.props.deleteAccount(deleteUser);
      this.props.createMessage({ updateSuccesfull: 'Account deleted succesfully' });
      this.props.history.push('/designers/');
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { deleteWord, password } = this.state;
    return (
      <Form {...layout} onFinish={this.onSubmit}>
        <Card
          hoverable
          style={{ marginTop: "0px", width: "92%", left: '4%', top: '2%' }}
        >
          <Form.Item
            style={{ marginTop: "30px" }}
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
            style={{ marginTop: "30px" }}
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
            <Button type="danger" htmlType="submit" style={{ marginBottom: "20px" }} onClick={this.onSubmit}>
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