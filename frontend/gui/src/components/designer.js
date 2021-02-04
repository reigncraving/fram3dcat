import React from 'react';
import { List, message, Avatar, Spin, Card } from 'antd';
import AuthorFramesList from '../containers/FramesByAuthorList';
import { ClockCircleOutlined } from '@ant-design/icons';
import { applyProps } from 'react-three-fiber';






const Designer = (props) => {


    return (
      <>
<Card>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize:10,
          }}
          dataSource={props.data}
          footer={

            <div>

            </div>
          }

          renderItem={item => (
            <List.Item

              key={item.id}
              actions={[


              ]}>

              <List.Item.Meta
                    avatar={
                      <Avatar
                      size={64}
                      shape="circle"
                      src={item.avatar}
                      backgroundColor='#87d068' />
                    }
                    title={<a href="http://localhost:3000/dashboard"><b>{item.username}</b></a>}
                    description={item.email}
                  />

                    <AuthorFramesList username={item.username}></AuthorFramesList>

            </List.Item>
          )}
        />
</Card>
      </>
      );
  }


export default Designer
