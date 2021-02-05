import React from 'react';
import FrameList from '../components/frameList'
import { connect } from 'react-redux';
import {loadUser, MyFrames } from '../store/actions/auth';
import FrameViewer from '../containers/FrameViewer'
import Axios from 'axios';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
class AuthorFramesList extends React.Component {

  constructor(props) {
    super(props)

    // Bind the this context to the handler function
//    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
        Frame: [],
    };
}
//
// handler() {
//     this.forceUpdate();
//     window.location.reload();
//         this.setState({
//             reload: true
//         });
//     }

  //Get the data from django
  componentDidMount(){
   //
    //this.props.MyFrames();
   // const token = this.props.userData.token;

    // // Headers
    // const config = {
    //   headers: {
    //     'Authorization': `Token ${token}`,
    //   },
    // };
     const username = this.props.author;
      Axios.get(`http://127.0.0.1:8000/global/frame_author/?author__username=${username}`)
      .then(res => {
          this.setState({Frame: res.data}); //res = response data
      })
  }


    render(){
        return(
          <>
            <Collapse defaultActiveKey={['0']} onChange={callback}>
             <Panel header="View Models" key="1">
              <FrameList data={this.state.Frame} action={this.handler} />
             </Panel>
            </Collapse>
          </>
        );
    }
}




export default AuthorFramesList;
