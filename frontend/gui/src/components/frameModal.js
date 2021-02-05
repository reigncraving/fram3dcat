import React, { Component } from 'react';
import FrameViewer from '../containers/FrameViewer'
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
  EyeOutlined
 } from '@ant-design/icons';

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
     views: 0,
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
        views: +1,
        ModalVisible: false,
      });
    };


    render() {

     const ModalVisible = this.state.ModalVisible;
      return (
        <>
        <Card
        onClick={this.showModal}
        hoverable
        cover= {
          <>
            <img
            width="200px"
             height="200px"
             src= {this.props.data.frame_picture}
             />
             <div id="title" style={{marginRight: "auto",marginLeft:"auto",  width: "4em", marginTop:"10%", fontSize:"12pt"}}><b>{this.props.data.title}</b></div>
           </>
         }
        >

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

            footer={[
           ]}
          >

          <Avatar size={70} src={this.props.data.author.avatar} style={{float:"left"}}/>

           <div name="info">
            <b style={{paddingLeft: "10px", fontSize:"16pt"}}>{this.props.data.title}</b>
              <br/>
                <span style={{marginLeft:"10px"}}> by:</span> <b style={{color:"blue", fontSize:"14pt"}}>{this.props.data.author.username}</b>
              </div>
          <br/>
            <div name="canvas" style= {{width: "100%" }}>
              <div key={this.state.key}>
                <FrameViewer data={this.props.data}/>
              </div>
            </div>
         <IconText icon={EyeOutlined} text={this.props.data.views} key="Views" />
         <IconText icon={HeartOutlined} text={this.props.data.likes} key="Likes" />
         <div name="description">
            <p><b>Description</b></p>
            <p>{this.props.data.description}</p>
         </div>

          </Modal>
        </>
      );
    }
  }

export default FrameModal;
