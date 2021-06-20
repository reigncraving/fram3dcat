import React from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  Select
} from 'antd';
import {
  WarningTwoTone,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFrame } from '../../store/actions/auth';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../../store/actions/messages';

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

class EditFrame extends React.Component {
  static propTypes = {
    update_PersonalInfo: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  state = {
    loadings: [],
    ModalText: 'PersonalInfo',
    visible: false,
    confirmLoading: false,
    upload_image: false,
    upload_file: false,
    title: " ",
    description: " ",
    user_ID: "",
    frameFile: " ",
    framePicture: " ",
  };

  showModal = () => {
    this.setState({
      visible: true,
      title: " ",
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
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  onSubmit = (e) => {
    //e.preventDefault();
    this.setState({
      confirmLoading: true,
      user_ID: this.props.userData.id
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);

    let form_data = new FormData();
    if (this.state.title !== " ") {
      form_data.append('title', this.state.title);
    };
    if (this.state.description !== " ") {
      form_data.append('description', this.state.description);
    }
    if (this.state.upload_image) {
      form_data.append('frame_picture', this.state.framePicture);
    };
    if (this.state.upload_file) {
      form_data.append('frameFile', this.state.frameFile);
    };
    const frame_ID = this.props.data.id;
    this.props.updateFrame(form_data, frame_ID);
    this.props.createMessage({ updateSuccesfull: 'Update success' });
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

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  handleImageChange = (e) => {
    this.setState({
      upload_image: true,
      framePicture: e.target.files[0],
    })
  };

  handleFileChange = (e) => {
    this.setState({
      upload_file: true,
      frameFile: e.target.files[0],
    })
  };
  render() {
    const { visible, confirmLoading } = this.state;
    const { loadings } = this.state;
    return (
      <>
        <Button onClick={this.showModal}>
          Edit
        </Button>
        <Modal
          title="Edit Frame"
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
              name={['title']}
              label="Title "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="title"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.data.title}
              />
            </Form.Item>
            <Form.Item
              name={['description']}
              label="Short description "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="description"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.data.description}
              />
            </Form.Item>
            <Form.Item
              name={['frameFile']}
              label="Frame file "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <input type="file"
                id="frameFile"
                accept="application/glb"
                onChange={this.handleFileChange}
                style={{ color: "blue", }}
              />
              <span style={{ color: '#8D8BFF' }}>
                <br />
                <WarningTwoTone />
                <b Style={{ color: "#8BC7FF" }}>Only glTF-Binary files supported (*.glb)</b>
              </span>
            </Form.Item>
            <Form.Item
              name={['framePicture']}
              label="Frame Screenshot "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <input type="file"
                id="framePicture"
                accept="image/png, image/jpeg" onChange={this.handleImageChange}
                style={{ color: "blue", }}
              />
              <br />
              <span style={{ color: '#8D8BFF' }}>
                <b Style={{ color: "#8BC7FF" }}>*.png, *.jpg</b>
              </span>
            </Form.Item>
            <Form.Item>
              <p style={{ marginLeft: "35%", color: "gray" }}><i>Note: Upload only if you want to replace current files:</i></p>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button style={{ marginRight: "10px" }} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
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

export default withRouter(connect(mapStateToProps, { updateFrame, createMessage })(EditFrame));
