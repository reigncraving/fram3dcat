import React from 'react';
import Axios from 'axios';
import FrameViewer from '../containers/FrameViewer'
import FrameModal from './frameModal'
import {
  List,
  Card,
  Avatar,
  Space,
  Button,
} from 'antd';


const FrameList = (props) => {
  const action = props.action
  return (
  <>
    <List
      grid={{
         gutter: 30,
         sm: 10,
        }}
      size="Small"
      Loading = "true"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>

              <>
                <FrameModal data={item} action={action}>
                </FrameModal>
                <Button >Edit   </Button>
                <Button type="danger" style={{marginLeft:"70px"}}>Delete</Button>
              </>


        </List.Item>
      )}
    />
  </>
  );
}




export default FrameList;
