import React from 'react';
import { Link } from 'react-router-dom'
import FrameModal from './frameModal'
import {
  List,
  Card,
  Avatar,
  Space
} from 'antd';
import {
  EyeOutlined
} from '@ant-design/icons';

const AvatarText = ({ source, text, link }) => (
  <span style={{ float: "left", marginLeft: "30px" }}>
    <Link to={link}>
      <Avatar size={32} src={source} />
      <b style={{ fontSize: "12pt", marginLeft: "5px" }}>{text}</b>
    </Link>
  </span>
);

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Frame = (props) => {
  return (
    <Card height="100%">
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
          pageSize: 20,
        }}
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <Card
              actions={[
                <>
                  <AvatarText source={item.author.avatar} text={item.author.username} key="Views" link={"/profile/" + item.author.id} />
                  <IconText icon={EyeOutlined} text={item.views} key="Likes" />
                </>
              ]}
              loading={props.loading}
              hoverable
              bodyStyle={{ padding: "0" }}
              style={{ width: 250 }}
              cover={
                <FrameModal data={item}>
                </FrameModal>
              }
            >
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default Frame;
