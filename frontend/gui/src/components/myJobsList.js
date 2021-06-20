import React from 'react';
import { List, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import DeleteJob from '../features/job/DeleteJob'
import EditJob from '../features/job/EditJob'
import moment from 'moment';

const MyJobsList = (props) => {

  const avatar = (item) => (
    <span
      style={{ color: "gray", size: "8pt" }}>
      <ClockCircleOutlined />
      {moment(item.pub_date).format('DD-MM-YYYY')}
    </span>
  );

  const title = (item) => (
    <a href={`/jobs/${item.id}`}>
      <div>
        <b>
          {item.headline}
        </b>
      </div>
    </a>
  );

  return (
    <Card height="100%">
      <List
        size="large"
        itemLayout="vertical"
        Loading="true"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={title(item)}
              description={item.description}
              avatar={avatar(item)}
            />
            <EditJob data={item} />
            <DeleteJob data={item} />
          </List.Item>
        )}
      />
    </Card>
  );
}

export default MyJobsList
