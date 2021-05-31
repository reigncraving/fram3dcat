import React from 'react';
import MyJobsList from '../components/myJobsList'
import { getMyJobs, auth } from '../store/actions/auth';
import { connect } from 'react-redux';

class MyJobsListView extends React.Component {

             state = {

               data: [],

          };

  onClick = (e) => {
    console.log(this.props.data)
  };
  //Get the data from django
  componentDidMount(){
    const username = this.props.username;

    this.props.getMyJobs(username);
    //console.log(this.state.data)
  };

    render(){
        return(
          <>
             <MyJobsList data={this.props.data} />
          </>
        );
    }
}

const mapStateToProps = (state) => ({
  data: state.auth.Jobs,

});


export default connect(mapStateToProps, {getMyJobs})(MyJobsListView);
