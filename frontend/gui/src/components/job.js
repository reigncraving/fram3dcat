import React from 'react';
import { List, message, Avatar, Spin, Card, Space } from 'antd';
import AuthorFramesList from '../containers/FramesByAuthorList';
import { ClockCircleOutlined, HeartOutlined,  } from '@ant-design/icons';
import { applyProps } from 'react-three-fiber';
import Axios from 'axios';
import moment from 'moment';

const { Meta } = Card;

const AvatarText = ({ source, text }) => (
  <span>
    <Avatar size={32} src={source} />
    <b style={{fontSize:"9pt", marginLeft:"10px"}}>{text}</b>
  </span>
);

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);



const Job = (props) => {

    return (
      <>
        <Card height="100%">
          <List
            size="large"
            itemLayout="vertical"
            Loading = "true"
            dataSource={props.data}
            renderItem={item => (
              <List.Item
                actions={[
                  <>
                    <AvatarText source={item.author.avatar} text={item.author.username} key="author" />

                  </>
                ]}
              >



                <List.Item.Meta

                  title={<a  href={`/jobs/${item.id}`}><div><b>{item.headline}</b></div></a>}
                  description={item.description}
                  avatar=<span style={{color:"gray", size:"8pt"}}><ClockCircleOutlined/>{moment(item.pub_date).format('DD-MM-YYYY')}</span>
                />
              </List.Item>
            )}
          />
        </Card>
      </>

      );
  }


export default Job
