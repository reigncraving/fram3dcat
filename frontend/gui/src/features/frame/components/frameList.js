import React from 'react';
import FrameModal from './frameModal'
import {
  List,
} from 'antd';

const FrameList = (props) => {
  return (
    <>
      <List
        grid={{
          gutter: 30,
          sm: 10,
        }}
        size="Small"
        Loading="true"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <>
              <FrameModal data={item}>
              </FrameModal>
            </>

          </List.Item>
        )}
      />
    </>
  );
}

export default FrameList;
