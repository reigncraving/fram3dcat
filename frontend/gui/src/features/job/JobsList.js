import React from 'react';
import Job from '../../components/job'
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../store/actions/auth';
import PleaseLogin from '../../components/PleaseLogin/PleaseLogin';

class JobsListView extends React.Component {
  state = {
    job: [],
  };
  componentDidMount() {
    Axios.get(`http://127.0.0.1:8000/jobs/author/`)
      .then(res => {
        this.setState({ job: res.data });
        console.log(this.state.job);
      })
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <>
        {isAuthenticated
          ?
          <Job data={this.state.job} />
          :
          PleaseLogin("to view the jobs board.")
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, { loadUser })(JobsListView));
