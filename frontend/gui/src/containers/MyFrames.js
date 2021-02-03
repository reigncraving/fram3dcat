import React from 'react';
import FrameList from '../components/frameList'
import { connect } from 'react-redux';
import {loadUser, myFrames } from '../store/actions/auth';
import FrameViewer from '../containers/FrameViewer'
import Axios from 'axios';




class MyFramesList extends React.Component {

  state = {
      Frame: [],
  }




  //Get the data from django
  componentDidMount(){

    //this.props.MyFrames();
   // const token = this.props.userData.token;

    // // Headers
    // const config = {
    //   headers: {
    //     'Authorization': `Token ${token}`,
    //   },
    // };
     const username = this.props.userData.username;
      Axios.get(`http://127.0.0.1:8000/global/frames/by/${username}/`)
      .then(res => {
          this.setState({Frame: res.data}); //res = response data
          
      })
  }


    render(){
        return(
          <>
            <FrameList data={this.state.Frame} />
          </>
        );
    }
}

//export default MyFrames;
const mapStateToProps = (state) => ({
  userData: state.auth,

});


export default connect(mapStateToProps, {loadUser, myFrames})(MyFramesList);
