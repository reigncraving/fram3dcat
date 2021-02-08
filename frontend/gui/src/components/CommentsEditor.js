import React from 'react';
import Axios from 'axios';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import { addViews } from '../store/actions/auth'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);





class CommentsEditor extends React.Component {
  state = {
    comments: { },
    submitting: false,
    value: '',
  };

  static propTypes = {
     auth: PropTypes.object.isRequired,
   };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: this.props.data.user.username,
            avatar: this.props.data.user.avatar,
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount(){
    //  http://127.0.0.1:8000/global/comment/?post__id=10
    const id = this.props.post;
     Axios.get(`http://127.0.0.1:8000/global/comment/?post__id=${id}`)
     .then(res => {
         this.setState({comments: res.data}); //res = response data
         console.log(this.state.comments)
     })
  }

  render() {
    const { comments, submitting, value } = this.state;
    const { isAuthenticated, user } = this.props.data;
    return (
      <>
        {this.props.post}
        {comments.length > 0 && <CommentList comments={comments} />}
        {isAuthenticated ?
          <Comment
            avatar={
              <Avatar
                src={this.props.data.user.avatar}
                alt="avatar"
              />
            }

            content={
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
         : <><hr style={{color:'#F0F0F0', borderTop:"none"}}/><p style={{color:"gray"}}>Please login to post comments</p> <Button type="primary"><Link to='/login'>Login</Link></Button></>}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.auth,

});

export default withRouter(connect(mapStateToProps,  { addViews })(CommentsEditor));
