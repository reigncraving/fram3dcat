import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { addViews, getComments, postComment } from '../store/actions/auth'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PleaseLogin from './PleaseLogin/PleaseLogin';

const { TextArea } = Input;

const CommentList = (props) => (
  <List
    dataSource={props.data}
    header={`${props.data.length} ${props.data.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={item => (
      <List.Item>
        <Comment
          author={<> <Link to={"/profile/" + item.author.id}> <b style={{ color: "blue", fontSize: "12pt" }}>{item.author.username}</b></Link> <p>{item.pub_date} </p> </>}
          avatar={
            <>
              {item.content ?
                <Avatar
                  src={item.author.avatar}
                  alt="avatar"
                />
                :
                null
              }
            </>
          }
          content={item.content}
        />
      </List.Item>
    )}
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
    comments: {},
    submitting: false,
    post: null,
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

    // create post :
    const post = this.props.post;
    const content = this.state.value;
    const author = this.props.data.id;
    console.log(post, content, author);
    this.props.postComment(post, content, author);

    setTimeout(() => {
      this.setState({
        submitting: false,
      });
    }, 1000);

    //clear data on form
    this.setState({
      value: '',
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    const post_ID = this.props.post;
    this.props.getComments(post_ID)
  }

  render() {
    const { submitting, value } = this.state;
    const { isAuthenticated } = this.props.data;
    return (
      <>
        {this.props.commentsData.length > 0 ? <CommentList data={this.props.commentsData} /> : null}
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
          : PleaseLogin("post comments")
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.auth,
  commentsData: state.auth.comments,
});

export default withRouter(connect(mapStateToProps, { addViews, getComments, postComment })(CommentsEditor));
