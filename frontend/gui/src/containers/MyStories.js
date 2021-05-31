import React from 'react';
import MyStoriesList from '../components/MyStoriesList'
import { getMyStories, auth } from '../store/actions/auth';
import { connect } from 'react-redux';
import EditFrame from '../containers/EditFrame'
import DeleteFrame from '../containers/DeleteFrame'


class MyStoriesListView extends React.Component {
             state = {
               stories: [],
          };

  //Get the data from django
  componentDidMount(){
    const username = this.props.username;

    this.props.getMyStories(username);
    console.log(this.props.storiesData)
  };


    render(){
        return(
          <>
             <MyStoriesList data={this.props.storiesData} />
          </>
        );
    }
}

const mapStateToProps = (state) => ({
  storiesData: state.auth.stories,

});


export default connect(mapStateToProps, {getMyStories})(MyStoriesListView);
