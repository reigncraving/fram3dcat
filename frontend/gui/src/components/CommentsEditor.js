import React from 'react';
import Axios from 'axios';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import { addViews, getComments, postComment } from '../store/actions/auth'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const CommentList = (props) => (
  <List
    dataSource={props.data}
    header={`${props.data.length} ${props.data.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={item => (
      <List.Item>


      <Comment
        author={ <> <b>{item.author.username}</b> <p>{item.pub_date} </p> </>}
        avatar={
          <Avatar
            src={item.author.avatar}
            alt="avatar"
          />
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
    comments: { },
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

  componentDidMount(){
    //  http://127.0.0.1:8000/global/comment/?post__id=10
    const post_ID = this.props.post;
     // Axios.get(`http://127.0.0.1:8000/global/comment-author/?post__id=${id}`)
     // .then(res => {
     //     this.setState({comments: res.data}); //res = response data
     //     console.log(this.state.comments)
     // })

     this.props.getComments(post_ID)
     // this.setState({
     //    comments: this.props.comments
     // });
  }

  render() {
    const { comments, submitting, value } = this.state;
    const { isAuthenticated, user } = this.props.data;
    return (
      <>
        {this.props.commentsData.length > 0 ? <CommentList data={this.props.commentsData}/> : null }
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
  commentsData: state.auth.comments,
});

export default withRouter(connect(mapStateToProps,  { addViews, getComments, postComment})(CommentsEditor));
