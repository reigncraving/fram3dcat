import React from 'react';
import { List, Card} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
//import { Divider } from 'antd';
//import { Card } from 'antd';

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Story = (props) => {
    return (
    <>
    <Card>

      <List
        itemLayout="vertical"
        size="large"
        dataSource={props.data}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize:10,
        }}
        footer={

          <div>

          </div>
        }

        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={ClockCircleOutlined} text={item.pub_date} key="list-vertical-star-o" />,

            ]}>

            <List.Item.Meta
              title={<a style={{fontSize:"14pt"}} href={"/stories/"+item.id}>{item.headline}</a>}
              description={item.description}
            />

            <a
              href = {"/stories/"+item.id}
              >
              <img
                  width={272}
                  alt="logo"
                  src={item.headline_photo}
                />
            </a>
          </List.Item>
        )}
      />
        </Card>
    </>
    );
}


export default Story;
