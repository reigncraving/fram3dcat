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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateJob } from '../../store/actions/auth';
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

const dateFormat = 'DD-MM-YYYY';
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class EditJob extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  state = {
    loadings: [],
    visible: false,
    confirmLoading: false,
    jobID: "",
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
  componentDidMount() {
    this.setState({
      jobID: this.props.data.id,
      headline: this.props.data.headline,
      description: this.props.data.description,
      body_text: this.props.data.body_text,
      salary: this.props.data.salary,
      due_date: moment(this.props.data.due_date).format('DD-MM-YYYY'),
      number_of_comments: this.props.data.number_of_comments,
      rating: this.props.data.number_of_comments,
      is_remote: this.props.data.is_remote,
      is_active: this.props.data.is_active,
      submition_url: this.props.data.submition_url,
      experience: this.props.data.experience,
      author: this.props.data.author,
    });
  }

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
      //jobID: this.props.data.id
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);

    let form_data = new FormData();
    form_data.append('headline', this.state.headline);
    form_data.append('description', this.state.description);
    form_data.append('body_text', this.state.body_text);
    form_data.append('salary', this.state.salary);
    if (this.state.due_date === " ") {
      form_data.append('due_date', this.props.data.due_date);
    }
    else {
      form_data.append('due_date', this.state.due_date);
    }
    form_data.append('is_remote', this.state.is_remote);
    form_data.append('submition_url', this.state.submition_url);
    form_data.append('experience', this.state.experience);
    const jobID = this.props.data.id;
    this.props.updateJob(jobID, form_data);
    this.props.createMessage({ updateSuccesfull: 'Updated succesfully' });
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
      due_date: moment(date).format('DD-MM-YYYY')
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
          Edit Job
        </Button>
        <Modal
          title="Edit Job"
          visible={visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          width="70%"
          confirmLoading={confirmLoading}
          footer=" "
        >
          {this.props.data.due_date}
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
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="headline"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.data.headline}
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
              name={['body_text']}
              label="Post"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <CKEditor
                editor={ClassicEditor}
                onChange={this.handleOnEditorChange}
                data={this.props.data.body_text}
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
                defaultValue={this.props.data.salary}
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
                <DatePicker defaultValue={moment(this.props.data.due_date)} format={dateFormat} onChange={this.onDateChange} />
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
              {this.props.data.is_remote}
              <span style={{ marginRight: '5px' }}>No</span>
              {this.props.data.is_remote ? <Switch name='is_remote' defaultChecked onChange={this.onSwitchChange} /> : <Switch name='is_remote' onChange={this.onSwitchChange} />}
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
                defaultValue={this.props.data.submition_url}
              />
              <span style={{ color: "gray" }}>Page where work applications can be send</span>
            </Form.Item>
            <Form.Item
              name={['experience']}
              label="Experience"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                style={{ width: 200 }}
                placeholder="Select a experience level"
                optionFilterProp="children"
                onChange={this.handleChange}
                defaultValue={this.props.data.experience}
              >
                <Option value="INTERN">INTERN</Option>
                <Option value="JUNIOR">JUNIOR</Option>
                <Option value="SENIOR">SENIOR</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button style={{ marginRight: "10px" }} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Update Job
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

export default withRouter(connect(mapStateToProps, { updateJob, createMessage })(EditJob));
