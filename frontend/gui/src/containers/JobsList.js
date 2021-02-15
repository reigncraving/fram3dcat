import React from 'react';
import Job from '../components/job'
import FrameViewer from '../containers/FrameViewer'
import Axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux' ;
import { Button } from 'antd';
import { loadUser } from '../store/actions/auth';

class JobsListView extends React.Component {

          state = {
              job: [],
          };



  //Get the data from django
  componentDidMount(){
      Axios.get(`http://127.0.0.1:8000/jobs/author/`)
      .then(res => {
        this.setState({job: res.data}); //res = response data
        console.log(this.state.job);
      })
  }


    render(){

      const { isAuthenticated, user } = this.props.auth;
        return(
          <>
            {isAuthenticated
              ?
              <Job data={this.state.job}/>
              :
                <>
                  <div style={{marginTop:"100px"}}>
                  <p style={{color:"gray"}}>Please login to view the jobs board</p>
                  <Button type="primary">
                    <Link to='/login'>Login</Link>
                  </Button>
                  </div>
                </>
            }
          </>
        );
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, {loadUser})(JobsListView));
