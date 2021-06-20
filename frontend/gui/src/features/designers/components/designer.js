import React from "react";
import { List, Avatar, Card } from "antd";
import AuthorFramesList from "../../frame/FramesByAuthorList";

const Designer = (props) => {
  return (
    <Card>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) =>
          console.log(page),
          pageSize: 10,
        }}
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item key={item.id} actions={[]}>
            <List.Item.Meta
              avatar={
                <Avatar
                  size={64}
                  shape="circle"
                  src={item.avatar}
                />
              }
              title={
                <a href={"http://localhost:3000/profile/" + item.id}>
                  <b>{item.username}</b>
                </a>
              }
              description={item.email}
            />
            <AuthorFramesList author={item.username}></AuthorFramesList>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Designer;
