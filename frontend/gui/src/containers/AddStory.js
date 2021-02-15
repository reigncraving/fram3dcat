import React, { Component } from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
  Space
} from 'antd';
import moment from 'moment';
import {
   UploadOutlined,
   WarningTwoTone,
   FormOutlined,
 } from '@ant-design/icons';

 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { auth, createStory } from '../store/actions/auth';
 import { withRouter } from 'react-router-dom';
 import { createMessage } from '../store/actions/messages';
 import { CKEditor } from '@ckeditor/ckeditor5-react';
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

const { TextArea } = Input;



const validateMessages = {
  required: '${label} is required!',

};


class AddStory extends React.Component {
  static propTypes = {

    isAuthenticated: PropTypes.bool,
  };


    state = {
      loadings: [],

      visible: false,
      confirmLoading: false,

       author: null,
       headline: "",
       headline_photo: "",
       body_text: "",
       description: "",

    };


    showModal = () => {
      this.setState({
        visible: true,
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
      this.setState({
        visible: false,
      });
    };


    onSubmit = (e) => {
      //e.preventDefault();
      this.setState({
        confirmLoading: true,
        author: this.props.userData.id
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);


        let form_data = new FormData();
        form_data.append('author', this.state.author);
        form_data.append('headline', this.state.headline);
        form_data.append('headline_photo', this.state.headline_photo);
        form_data.append('body_text', this.state.body_text);
        form_data.append('description', this.state.description);

        this.props.createStory(form_data);
        this.props.createMessage({ createJob: 'Story posted' });


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
      this.setState({
        experience: value,
      });
    };

   handleOnEditorChange = (e, editor) => {
     const data = editor.getData();
     this.setState({
       body_text: data
     });
   }

   handleImageChange = (e) => {
   this.setState({
     headline_photo: e.target.files[0],
   })
   };

    render() {
      const { visible, confirmLoading, ModalText } = this.state;
      const { loadings } = this.state;
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
          <FormOutlined />  Write Story
          </Button>
          <Modal
            title="Write Story"
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

            <Form.Item
              name={['headline']}
              label="Headline "
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="headline"
                className="form-control"
                onChange={this.onChange}
               />
            </Form.Item>

            <Form.Item
              name={['description']}
              label="Short description "
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="description"
                className="form-control"
                onChange={this.onChange}
               />
            </Form.Item>

            <Form.Item
              name={['body_text']}
              label="Post"
              rules={[
                {
                  required: true,
                },
              ]}
            >


               <CKEditor
                   editor={ClassicEditor}
                   onChange={this.handleOnEditorChange}
               />

            </Form.Item>

            <Form.Item
              name={['headline_photo']}
              label="Cover picture "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <input type="file"
                     id="headline_photo"
                     accept="image/png, image/jpeg"  onChange={this.handleImageChange} required
                     style={{color: "blue",  }}
                     />
                     <br/>
                     <span style={{color:'#8D8BFF'}}>
                     <b Style={{color:"#8BC7FF"}}>*.png, *.jpg</b>
                     </span>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button style={{marginRight:"10px"}} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Post Story
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
export default withRouter(connect(mapStateToProps,  { createStory, createMessage })(AddStory));
