import React from 'react';
import {
  Modal,
  Button,
  Form,
} from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteStory } from '../../store/actions/auth';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../../store/actions/messages';

class DeleteStory extends React.Component {
  static propTypes = {
    update_PersonalInfo: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  state = {
    loadings: [],
    ModalText: 'Delete',
    visible: false,
    confirmLoading: false,
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
    const story_ID = this.props.data.id;
    this.props.deleteStory(story_ID);
    this.props.createMessage({ deleteSuccess: 'story Deleted' });
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

  render() {
    const { visible, confirmLoading } = this.state;
    const { loadings } = this.state;
    return (
      <>
        <Button type="danger" onClick={this.showModal}>
          Delete
        </Button>
        <Modal
          title="Delete Story"
          visible={visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          width="50%"
          confirmLoading={confirmLoading}
          footer=" "
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={this.onSubmit}
            validateMessages={this.validateMessages}>
            Are you sure you want to delete <b>{this.props.data.headline}</b> ?
            <Form.Item>
            </Form.Item>
            <br />
            <Form.Item
              label="frame"
            >
              <img src={this.props.data.headline_photo} alt="Cover" width="300px" style={{ border: "5px solid darkgray" }} />
            </Form.Item>
            <Form.Item>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button style={{ marginRight: "10px" }} type="danger" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                delete
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

export default withRouter(connect(mapStateToProps, { deleteStory, createMessage })(DeleteStory));

const layout = {
  labelCol: {
    span: 2,
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