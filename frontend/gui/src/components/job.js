import React from 'react';
import { List, message, Avatar, Spin, Card } from 'antd';
import AuthorFramesList from '../containers/FramesByAuthorList';
import { ClockCircleOutlined } from '@ant-design/icons';
import { applyProps } from 'react-three-fiber';
import Axios from 'axios';





const Job = (props) => {

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
                <>
              <ClockCircleOutlined />{item.pub_date}
               </>

              ]}
              extra={
                <>
                {item.author}
                </>
              }
              >

              <List.Item.Meta

                    title={<a href={"/jobs/"+item.id}><b>{item.headline}</b></a>}
                    description={item.description}
                  />



            </List.Item>
          )}
        />
</Card>
      </>
      );
  }


export default Job
