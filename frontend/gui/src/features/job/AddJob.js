import React from 'react';
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
  FileTextOutlined,
} from '@ant-design/icons';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createJob } from '../../store/actions/auth';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../../store/actions/messages';
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

const dateFormat = 'MM-DD-YYYY';
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class AddJob extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  state = {
    loadings: [],
    visible: false,
    confirmLoading: false,
    headline: "",
    description: "",
    body_text: "",
    salary: null,
    due_date: null,
    number_of_comments: null,
    rating: null,
    is_remote: false,
    is_active: true,
    submition_url: "",
    experience: null,
    author: null,
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
    const {
      headline,
      description,
      body_text,
      salary,
      due_date,
      number_of_comments,
      rating,
      is_remote,
      is_active,
      submition_url,
      experience,
    } = this.state;
    this.props.createJob(headline,
      description,
      body_text,
      salary,
      due_date,
      number_of_comments,
      rating,
      is_remote,
      is_active,
      submition_url,
      experience,
    );
    this.props.createMessage({ createJob: 'Job posted' });
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

  onSwitchChange = (checked) => {
    console.log(checked)
    this.setState({ is_remote: checked });
  }

  onDateChange = (date) => {
    this.setState({
      due_date: moment(date).format('DD-MM-YYYY'),
    });
  }

  handleOnEditorChange = (e, editor) => {
    const data = editor.getData();
    this.setState({
      body_text: data
    });
  }

  render() {
    const { visible, confirmLoading } = this.state;
    const { loadings } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          <FileTextOutlined />  Post Job
        </Button>
        <Modal
          title="Post Job"
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
              name={['salary']}
              label="Salary "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="number"
                name="salary"
                prefix={<span style={{ color: "gray" }}>$</span>}
                suffix={<span style={{ color: "gray" }}>USD</span>}
                className="form-control"
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item
              name={['due_date']}
              label="Due date"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Space direction="vertical" size={12}>
                <DatePicker format={dateFormat} onChange={this.onDateChange} />
              </Space>
            </Form.Item>
            <Form.Item
              name={['is_remote']}
              label="Remote friendly "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <span style={{ marginRight: '5px' }}>No</span>
              <Switch name='is_remote' onChange={this.onSwitchChange} />
              <span style={{ marginLeft: '5px' }}>Yes</span>
            </Form.Item>
            <Form.Item
              name={['submition_url']}
              label="Apply to URL "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="submition_url"
                className="form-control"
                onChange={this.onChange}
              />
              <span style={{ color: "gray" }}>Page where work applications can be send</span>
            </Form.Item>
            <Form.Item
              name={['experience']}
              label="Experience "
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: 200 }}
                placeholder="Select a experience level"
                optionFilterProp="children"
                onChange={this.handleChange}
              >
                <Option value="INTERN">INTERN</Option>
                <Option value="JUNIOR">JUNIOR</Option>
                <Option value="SENIOR">SENIOR</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button style={{ marginRight: "10px" }} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Post Job
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

export default withRouter(connect(mapStateToProps, { createJob, createMessage })(AddJob));
