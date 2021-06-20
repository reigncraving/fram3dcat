import React from 'react';
import Axios from 'axios';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { Card } from 'antd';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { getStoryComments, postStoryComment } from '../../store/actions/auth'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ClockCircleOutlined,
} from '@ant-design/icons';

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


const AvatarText = ({ source, text, link }) => (
  <span style={{ marginLeft: "10px" }}>
    <Link to={link}>
      <Avatar size={32} src={source} />
      <b style={{ fontSize: "12pt", marginLeft: "5px" }}>{text}</b>
    </Link>
  </span>
);


class StoryDetailView extends React.Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  // stories from Django API are strored here
  state = {
    id: " ",
    stories: [],
    author: [],
    StoryID: " ",
    comments: {},
    submitting: false,
    post: null,
    value: '',
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }
    this.setState({
      submitting: true,

    });

    // create post :
    const post = this.state.id;
    const content = this.state.value;
    const author = this.props.data.id;
    console.log(post, content, author);
    this.props.postStoryComment(post, content, author);

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

  //Get the data from django
  componentDidMount() {
    const StoryID = this.props.match.params.StoryID;
    this.setState({ StoryID: this.props.match.params.StoryID });
    Axios.get(`http://127.0.0.1:8000/stories/author_info/${StoryID}/`)
      .then(res => {
        this.setState({ stories: res.data }); //res = response data
        this.setState({ author: this.state.stories.author })
        this.setState({ id: this.state.stories.id })
        console.log(this.state.id)
        this.props.getStoryComments(StoryID)
      })
  }

  render() {
    const { submitting, value } = this.state;
    const { isAuthenticated } = this.props.data;
    return (
      <>
        <Card
          title={<b style={{ textAlign: "center", fontSize: "14pt" }}>{this.state.stories.headline}</b>}
          cover={<img src={this.state.stories.headline_photo} alt="Hedline"/>}
          style={{ width: "70%", marginLeft: "15%" }}
        >
          <span style={{ color: "#24ACFF", marginRight: "20px" }}><ClockCircleOutlined />{moment(this.state.stories.pub_date).format('DD-MM-YYYY')}</span>
          <br />
          <br />
          <br />
          <p> {ReactHtmlParser(this.state.stories.body_text)} </p>
          <br />
          <br />
          <br />
          <span style={{ color: "gray" }}>Story by:</span>
          <AvatarText
            source={this.state.author.avatar}
            text={this.state.author.username}
            link={"/profile/" + this.state.author.id}
          />
          {this.props.storyComments.length > 0 ? <CommentList data={this.props.storyComments} /> : null}
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
            : <><hr style={{ color: '#F0F0F0', borderTop: "none" }} /><p style={{ color: "gray" }}>Please login to post comments</p> <Button type="primary"><Link to='/login'>Login</Link></Button></>}
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.auth,
  storyComments: state.auth.storyComments,
});

export default withRouter(connect(mapStateToProps, { getStoryComments, postStoryComment })(StoryDetailView));
