import React from 'react';
import MyFrameList from '../components/myFrameList'
import { connect } from 'react-redux';
import { getMyFrames } from '../store/actions/auth';
import FrameViewer from '../containers/FrameViewer'
import EditFrame from '../containers/EditFrame'
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
             <MyFrameList data={this.props.frames} />
          </>
        );
    }
}

//export default MyFrames;
const mapStateToProps = (state) => ({
  frames: state.auth.frame,

});


export default connect(mapStateToProps, {getMyFrames})(MyFramesList);
