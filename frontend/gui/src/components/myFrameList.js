import React from 'react';
import Axios from 'axios';
import FrameViewer from '../containers/FrameViewer'
import FrameModal from './frameModal'
import EditFrame from '../containers/EditFrame'
import DeleteFrame from '../containers/DeleteFrame'
import {
  List,
  Card,
  Avatar,
  Space,
  Button,
} from 'antd';


const MyFrameList = (props) => {
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
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize:10,
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item>

              <>
                <FrameModal data={item} action={action}>
                </FrameModal>
                <EditFrame data={item}/>
                <span style={{marginLeft:"125px"}}>
                  <DeleteFrame data={item}/>
                </span>
              </>


        </List.Item>
      )}
    />
  </>
  );
}

export default MyFrameList;
