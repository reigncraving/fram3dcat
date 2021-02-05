import React from 'react';
import Axios from 'axios';
import FrameModal from './frameModal'
import {
  List,
  Card,
  Avatar,
  Space
} from 'antd';
import {
  ClockCircleOutlined,
  MessageOutlined,
  HeartOutlined,
  EyeOutlined
 } from '@ant-design/icons';

const { Meta } = Card;

const AvatarText = ({ source, text }) => (
  <span>
    <Avatar size={32} src={source} />
    <b style={{fontSize:"12pt"}}>{text}</b>
  </span>
);

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Frame = (props) => {
  const action = props.action
  return (
  <>
  <Card height="100%">
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
          <Card
            actions={[
                <AvatarText source={item.author.avatar} text={item.author.username} key="Views" />,
                <IconText icon={HeartOutlined} text={item.likes} key="Likes" />,
             ]}
            loading={props.loading}
            hoverable
            bodyStyle={{padding:"0"}}
            style={{ width: 250}}
            cover={
              <>
                <FrameModal data={item}>
                </FrameModal>
              </>
            }
          >

          </Card>
        </List.Item>
      )}
    />
</Card>
  </>
  );
}




export default Frame;
