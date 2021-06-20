import React from 'react';
import { List, Card } from 'antd';
import { ClockCircleOutlined, } from '@ant-design/icons';
import moment from 'moment';

const Job = (props) => {
  const avatar = (item) => (
    <span style={{ color: "gray", size: "8pt" }}>
      <ClockCircleOutlined />
      {moment(item.pub_date).format('DD-MM-YYYY')}
    </span>
  );

  const title = (item) => (
    <a href={`/jobs/${item.id}`}>
      <div style={{ fontSize: "14pt" }}>
        <b>{item.headline}</b>
      </div>
    </a>
  );

  return (
    <Card height="100%">
      <List
        size="large"
        itemLayout="vertical"
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
            <List.Item.Meta
              title={title(item)}
              description={item.description}
              avatar={avatar(item)}
            />
          </List.Item>
        )}
      />
    </Card>


  );
}


export default Job
