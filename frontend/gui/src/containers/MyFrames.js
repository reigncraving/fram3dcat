import React from 'react';
import FrameList from '../components/frameList'
import { connect } from 'react-redux';
import {loadUser, getMyFrames } from '../store/actions/auth';
import FrameViewer from '../containers/FrameViewer'
import Axios from 'axios';




class MyFramesList extends React.Component {

  state = {
      frames: [],
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


     const username = this.props.username;
      // Axios.get(`http://127.0.0.1:8000/global/frame_author/?author__username=${username}`)
      // .then(res => {
      //     this.setState({Frame: res.data}); //res = response data
      //
      // })

      this.props.getMyFrames(username);
  }


    render(){
        return(
          <>
             <FrameList data={this.props.frames} />
          </>
        );
    }
}

//export default MyFrames;
const mapStateToProps = (state) => ({
  frames: state.auth.frame,

});


export default connect(mapStateToProps, {getMyFrames})(MyFramesList);
