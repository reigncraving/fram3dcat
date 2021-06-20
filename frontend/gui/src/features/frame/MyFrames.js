import React from 'react';
import MyFrameList from './components/myFrameList'
import { connect } from 'react-redux';
import { getMyFrames } from '../../store/actions/auth';

class MyFramesList extends React.Component {

  state = {
    frames: [],
  }
  //Get the data from django
  componentDidMount() {
    const username = this.props.username;
    this.props.getMyFrames(username);
  }
  render() {
    return (
      <MyFrameList data={this.props.frames} />
    );
  }
}

const mapStateToProps = (state) => ({
  frames: state.auth.frame,
});

export default connect(mapStateToProps, { getMyFrames })(MyFramesList);
