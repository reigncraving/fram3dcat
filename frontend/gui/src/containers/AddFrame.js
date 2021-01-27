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


const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


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


class AddFrame extends React.Component {
    state = {
      ModalText: 'Add Frame',
      visible: false,
      confirmLoading: false,
        //upload
          fileList: [
         {
           uid: '-1',
           name: '',
           status: 'removed',
           url: '',
         },
       ],

    };

      handleUpload = info => {
         let fileList = [...info.fileList];

         // 1. Limit the number of uploaded files
         // Only to show two recent uploaded files, and old ones will be replaced by the new
         fileList = fileList.slice(-1);

         // 2. Read from response and show file link
         fileList = fileList.map(file => {
           if (file.response) {
             // Component will show file.url as link
             file.url = file.response.url;
           }
           return file;
         });

         this.setState({ fileList });
       };


    showModal = () => {
      this.setState({
        visible: true,
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
      // const {
      //   old_password,
      //   new_password } = this.state;
      // if (old_password == new_password) {
      //   this.props.createMessage({ passwordNotMatch: 'Passwords are the same match' });
      // } else {
      //   const updateUser = {
      //     old_password,
      //     new_password,
      //   };
      //   this.props.updatePassword(updateUser);
      // }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//for multiselect
    handleChange = (value) => {
      console.log(`selected ${value}`);
    }

    render() {
      const { visible, confirmLoading, ModalText } = this.state;
      const props = {
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          onChange: this.handleUpload,
          multiple: true,
        };
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            New frame
          </Button>
          <Modal
            title="New frame"
            visible={visible}
            onOk={this.handleOk}
            width="85%"
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            footer=" "
          >

          <Form {...layout} name="nest-messages" onFinish={this.onSubmit} validateMessages={this.validateMessages}>
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name={['user', 'description']} label="description">
            <Input.TextArea />
            </Form.Item>

            <Form.Item
            name={['tools', 'name']}
            label="Tools"
            rules={[
              {
                required: false,
              },
            ]}
            >
              <Select
               mode="multiple"
               allowClear
               style={{ width: '100%' }}
               placeholder="Please select"
               defaultValue={['a10', 'c12']}
               onChange={this.handleChange}
             >
               {children}
             </Select>
            </Form.Item>

            <Form.Item
            name={['field_Of_Work', 'name']}
            label="Field of work"
            rules={[
              {
                required: false,
              },
            ]}
            >
              <Select
               mode="multiple"
               allowClear
               style={{ width: '100%' }}
               placeholder="Please select"
               defaultValue={['a10', 'c12']}
               onChange={this.handleChange}
             >
               {children}
             </Select>
            </Form.Item>


            <Form.Item
            name={['uploadField', 'name']}
            label="File"
            rules={[
              {
                required: true,
              },
            ]}
            >
                <Upload {...props} fileList={this.state.fileList}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button style={{marginRight:"10px"}} type="primary" htmlType="submit">
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
    }
  }

export default AddFrame;
