import React from 'react';
import MyStoriesList from '../../components/MyStoriesList'
import { getMyStories } from '../../store/actions/auth';
import { connect } from 'react-redux';

class MyStoriesListView extends React.Component {
  state = {
    stories: [],
  };
  componentDidMount() {
    const username = this.props.username;
    this.props.getMyStories(username);
    console.log(this.props.storiesData)
  };
  render() {
    return (
      <MyStoriesList data={this.props.storiesData} />
    );
  }
}

const mapStateToProps = (state) => ({
  storiesData: state.auth.stories,
});

export default connect(mapStateToProps, { getMyStories })(MyStoriesListView);
