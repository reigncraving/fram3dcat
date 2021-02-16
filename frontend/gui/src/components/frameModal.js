import React, { Component } from 'react';
import FrameViewer from '../containers/FrameViewer'
import CommentsEditor from '../components/CommentsEditor'
import { addViews } from '../store/actions/auth'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Modal,
  Button,
  Card,
  Avatar,
} from 'antd';
import {
  ClockCircleOutlined,
  MessageOutlined,
  HeartOutlined,
  CloudUploadOutlined,
  EyeOutlined
 } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8, width:"20px" } })}
    {text}
  </span>
);




class FrameModal extends React.Component {

   state = {
     ModalVisible: false,
     key: 0,
     frame: [],
   };

   showModal = () => {
    this.setState({
      ModalVisible: true,
    });
  };

    handleOk = e => {
    console.log(e);
    this.setState({
      ModalVisible: false,
    });
  };

    handleCancel = e => {
      console.log(e);
      this.setState({
        key: + 1,
        ModalVisible: false,
      });
      //add views to frame be opening modal
      const frame_ID = this.props.data.id;
      const views = parseInt(this.props.data.views + 1);
    //views
      //alert(views)
      this.props.addViews(frame_ID, views);
    };


    render() {

     const ModalVisible = this.state.ModalVisible;
      return (
        <>
        <Card
        onClick={this.showModal}
        hoverable
        actions={[ <div id="title" style={{marginRight: "auto",marginLeft:"auto",  width: "4em", marginTop:"10%", fontSize:"12pt"}}><b>{this.props.data.title}</b></div>]}
        style={{padding: "0"}}
        >
        <img
        width="100%"
         height="100%"
         src= {this.props.data.frame_picture}
         />
        </Card>

          <Modal
            style={{
              margin: "0",
              padding: "0"

            }}
            centered
            visible={ModalVisible}
            width="70%"
            height="95%"
            onCancel={this.handleCancel}
            afterClose={this.props.action}

            footer={[ <span style={{color:"gray"}}><i>Frame Viewer v1.0</i></span>
           ]}
          >

          <Avatar size={70} src={this.props.data.author.avatar} style={{float:"left"}}/>

           <div name="info">
            <b style={{paddingLeft: "10px", fontSize:"16pt"}}>{this.props.data.title}</b>
              <br/>
                <span style={{marginLeft:"10px"}}> by  </span>
                  <Link to={"/profile/"+ this.props.data.author.id}>
                    <b style={{color:"blue", fontSize:"14pt"}}>{this.props.data.author.username}</b>
                  </Link>
              </div>
          <br/>
            <div name="canvas" style= {{width: "100%" }}>
              <div key={this.props.data.views}>
                { (this.state.ModalVisible) ? <FrameViewer data={this.props.data}/> : null }
              </div>
            </div>
            <span Style={{marginLeft:"10px"}}><IconText icon={CloudUploadOutlined} text={this.props.data.date_uploaded} key="Upload" /></span>
          <span><IconText icon={EyeOutlined} text={parseInt(this.props.data.views + 1)} key="Views" /></span>
         <div name="description">
            <br/>
            <p><b>Description</b></p>
            <p>{this.props.data.description}</p>
         </div>


            <CommentsEditor post={this.props.data.id}/>
          </Modal>
        </>
      );
    }
  }


  const mapStateToProps = (state) => ({
    views: state.auth.frame.views,

  });

//export default FrameModal;
export default withRouter(connect(mapStateToProps,  { addViews })(FrameModal));
