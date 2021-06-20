import React from 'react';
import { List, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import EditStory from '../features/story/EditStory';
import DeleteStory from '../features/story/DeleteStory';

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const MyStoriesList = (props) => {
  return (
    <Card>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={props.data}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10,
        }}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <>
                <IconText icon={ClockCircleOutlined} text={item.pub_date} key="list-vertical-star-o" />
                <br />

                <EditStory data={item} />

                <span style={{ marginLeft: "70px" }}>
                  <DeleteStory data={item} />
                </span>
              </>
            ]}>
            <List.Item.Meta
              title={<a href={"/stories/" + item.id}>{item.headline}</a>}
              description={item.description}
            />
            <a
              href={"/stories/" + item.id}
            >
              <img
                width={272}
                alt="headline_photo"
                src={item.headline_photo}
              />
            </a>
          </List.Item>
        )}
      />
    </Card>
  );
}


export default MyStoriesList;
