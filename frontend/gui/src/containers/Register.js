import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../store/actions/auth';
import { createMessage } from '../store/actions/messages';

import { Form, Input, Button, Card, Tabs } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';

const { TabPane } = Tabs;



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

// const validateMessages = {
//     required: '${label} is required!',
//     types: {
//     email: '${label} is not validate email!',
//     number: '${label} is not a validate number!',
//   },
//     number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };



class Register extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    is_designer: 'true'
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onTabChange = async(key) => {
    if(key==1){
      await this.setState({is_designer: 'true'})
    }else{
      await this.setState({is_designer: 'false'})
    }
  };

  onSubmit = (e) => {
    //e.preventDefault();
    const {
      username,
      email,
      password,
      password2,
      is_designer,
      } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      //send new user data to store auth.
      const newUser = {
        username,
        password,
        email,
        is_designer,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/designers" />;
    }
    const { username, email, company_name, password, password2, is_designer } = this.state;
    return (
      <Form {...layout} onFinish={this.onSubmit}>
        <Card
          hoverable
          cover=<img src={require('../../src/media/cover_small.png')} width="1000px" height="100px"/>
        //  extra="Register"
          style={{marginTop:"0px", width: "92%", left: '4%', top: '2%' }}
          >
          <b style={{color:"dark gray", fontSize:"14pt"}}>Looking forward to:</b>

          <Tabs defaultActiveKey="1" activeKey={this.state.activeTab} centered onChange={this.onTabChange}>
           <TabPane tab="Design" key="1">
               <p style={{marginLeft: '50%',
                marginTop:'10px'}}><strong>Designer</strong></p>
               <Form.Item
                 style={{marginTop:"30px"}}
                 label="username"
                 name="username"
                 rules={[
                   {
                     required: true,
                     message: 'Please input your username!',
                   },
                 ]}
                >
                <Input
                  size="large"
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={this.onChange}
                  value={username}
                />
              </Form.Item>

              <Form.Item
                style={{marginTop:"30px"}}
                label="E-mail"
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your email!',
                  },
                ]}
               >
               <Input
                 size="large"
                 name="email"
                 onChange={this.onChange}
                 value={email}
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

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
               {
                 required: true,
                 message: 'Please confirm your password!',
               },
               ({ getFieldValue }) => ({
                 validator(rule, value) {
                   if (!value || getFieldValue('password') === value) {
                     return Promise.resolve();
                   }

                   return Promise.reject('The two passwords that you entered do not match!');
                 },
               }),
             ]}
           >
             <Input.Password
             size="large"
             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
             type="password"
             name="password2"
             onChange={this.onChange}
             value={password2}
             />

             </Form.Item>

             <Form.Item {...tailFormItemLayout}>
               <Button type="primary" htmlType="submit" style={{ marginBottom: "20px"}}>
                 Register
               </Button>
               < br />
             <span>
             Already have and account?
             <Link
               to='/login/'> Login
             </Link>
             </span>
             {this.state.isDesigner}
             </Form.Item>

           </TabPane>


           <TabPane tab="Hire" key="2">
           <p style={{marginLeft: '50%',
            marginTop:'10px'}}><strong>Employer</strong></p>

            <Form.Item
              style={{marginTop:"30px"}}
              label="username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
             >
             <Input
               size="large"
               type="text"
               name="username"
               className="form-control"
               onChange={this.onChange}
               value={username}
             />
           </Form.Item>

           <Form.Item
             style={{marginTop:"30px"}}
             label="E-mail"
             name="email"
             rules={[
               {
                 required: true,
                 type: 'email',
                 message: 'Please input your email!',
               },
             ]}
            >
            <Input
              size="large"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </Form.Item>


          {/* <Form.Item
            style={{marginTop:"30px"}}
            label="Comapany Name"
            name="ComapanyName"
            rules={[
              {
                required: true,
                message: 'Please input your company name!',
              },
            ]}
           >
           <Input
             size="large"
             type="text"
             name="username"
             className="form-control"
             onChange={this.onChange}
             value={company_name}
           />
          </Form.Item> */}


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

           <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password
          size="large"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          type="password"
          name="password2"
          onChange={this.onChange}
          value={password2}
          />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ marginBottom: "20px"}}>
              Register
            </Button>
            < br />
          <span>
          Already have and account?
          <Link
            to='/login/'> Login
          </Link>
          </span>
          {this.state.isDesigner}
          </Form.Item>

           </TabPane>
        </Tabs>


      </Card>
     </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  is_designer: state.isDesigner,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
