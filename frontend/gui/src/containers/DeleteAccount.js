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
      deleteWord,
      token, } = this.state;
    if (deleteWord != "DELETE") {
      this.props.createMessage({ passwordNotMatch: 'Please confirm by typing DELETE!' });
    } else{
      const deleteUser = {
        deleteWord,
        token,
      };
      this.props.deleteAccount(deleteUser);
      this.props.logout();
      this.props.createMessage({ updateSuccesfull: 'Account deleted succesfully' });
      this.props.history.push('/designers/');
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {

    const { isAuthenticated, user } = this.props.auth;
    const { deleteWord} = this.state;
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
