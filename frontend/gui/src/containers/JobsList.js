import React from 'react';
import Job from '../components/job'
import FrameViewer from '../containers/FrameViewer'
import Axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux' ;
import { Button, Card } from 'antd';
import { WarningOutlined } from '@ant-design/icons'
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
                 <Card>
                  <div style={{marginTop:"100px", marginLeft:"40%"}}>
                  <WarningOutlined/>
                  <span style={{color:"gray"}}>Please <b>login</b> to view the jobs board</span>
                  <br/>
                  <br/>

                  <Button type="primary" style={{marginLeft:"10%"}}>
                    <Link to='/login'>Login</Link>
                  </Button>
                  </div>
                </Card>
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
