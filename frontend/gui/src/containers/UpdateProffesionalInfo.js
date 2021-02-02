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
import { update_ProffesionalInfo, auth, loadUser } from '../store/actions/auth';
import { withRouter, Redirect } from 'react-router-dom';
import { createMessage } from '../store/actions/messages';

const { Option } = Select;

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




class UpdateProffesionalInfo extends React.Component {

  constructor(props){
    super(props);
    this.handleWorkSelectChange = this.handleWorkSelectChange.bind(this);
    this.handleSkillSelectChange = this.handleSkillSelectChange.bind(this);

  };

  static propTypes = {
    update_PersonalInfo: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

    state = {
      loadings: [],
      ModalText: 'PersonalInfo',
      visible: false,
      confirmLoading: false,

       done: false,
       user_ID:"",
       work_fields:"",
       company_name:"",
       position:" ",
       skills:"",

    };


    showModal = () => {
      this.setState({
        visible: true,
        work_fields: this.props.work_fields,
        company_name: this.props.company_name,
        position: this.props.position,
        skills: this.props.skills,
        user_ID: this.props.userID,
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
        work_fields,
        company_name,
        position,
        skills
        } = this.state;
        const update = {
          user_ID,
          work_fields,
          company_name,
          position,
          skills,
        };
        this.props.update_ProffesionalInfo(update);
      //  this.setState({done:true});
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

    handleWorkSelectChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            work_fields: `${value}`
        });

    };

    handleSkillSelectChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            skills: `${value}`
        });

    };

    onSearch(val) {
        console.log('search:', val);
      };
//for multiselect
    handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    render() {

      if(this.state.done){
        return <Redirect to="/dashboard" />

      };
      const { visible, confirmLoading, ModalText } = this.state;
      const { loadings } = this.state;
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Edit
          </Button>
          <Modal
            title="Proffesional Info"
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
         <img src={require('../../src/media/pro.jpg')} alt="Professional" width="200" height="200" style ={{float:"left",  margin:"12px 4px 0 0"}}/>

            <Form.Item
              name={['work_fields', 'name']}
              label="Work fields:"
              rules={[
                {
                  required: false,
                },
              ]}
            >

                <Select
                    name= "work"
                    showSearch
                    size="large"
                    placeholder="Select a field"
                    optionFilterProp="children"
                    onSearch={this.onSearch}
                    onChange={this.handleWorkSelectChange}
                    defaultValue={this.props.work_fields}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value=" ">none</Option>
                    <Option value="RIGGING">Rigging</Option>
                    <Option value="MODELLING">Modeling</Option>
                    <Option value="VFX">Visual effects</Option>
                    <Option value="TEXTURING">Texturing</Option>
                    <Option value="ANIMATION">Animation</Option>
                    <Option value="FILM">Film and Media Arts</Option>
                    <Option value="GAME_DESIGN">Games design</Option>
                    <Option value="RENDERING">Rendering artist</Option>
                    <Option value="LIGHTNING">Lightning artist</Option>
                    <Option value="BACKGROUND">Background artist</Option>
                    <Option value="GRAPHIC_DESING">Graphic design</Option>
                    <Option value="PRODUCT_DESIGN">Product design</Option>
                    <Option value="CHARACTER_DESIGN">Character design</Option>
                    <Option value="WEBSITE_DESIGNER">3D website design</Option>
                    <Option value="INTERACTIVE_DESIGN">Interactive design</Option>
                    <Option value="CHARACTER_ANIMATATION">Character Animation</Option>
                </Select>
            </Form.Item>




            <Form.Item
              name={'company_name'}
              label="Company / Project name"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="company_name"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.company_name}

               />
            </Form.Item>

            <Form.Item
              name={'position'}
              label="Position"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="position"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.position}

               />
            </Form.Item>

            <Form.Item
              name={['skills', 'name']}
              label="Skills:"
              rules={[
                {
                  required: false,
                },
              ]}
            >

                <Select
                    showSearch
                    size="large"
                    placeholder="Select a field"
                    optionFilterProp="children"
                    onSearch={this.onSearch}
                    onChange={this.handleSkillSelectChange}
                    defaultValue={this.props.skills}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="QUICKLEARNER">Quick learner</Option>
                    <Option value="ARTISTIC">Artistic skills</Option>
                    <Option value="TIME_MANAGEMENT">Time management</Option>
                    <Option value="TEAMWORK">Teamwork</Option>
                    <Option value="COMMUNICATION">Communication</Option>
                    <Option value="ENGINEERING">Engineering</Option>

                </Select>
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
export default withRouter(connect(mapStateToProps, { update_ProffesionalInfo, loadUser, createMessage })(UpdateProffesionalInfo));
