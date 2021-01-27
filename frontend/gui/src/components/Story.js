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
              title={<a href={"/stories/"+item.id}>{item.headline}</a>}
              description={item.Description}
            />

            <img
              
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            {item.description}
          </List.Item>
        )}
      />
        </Card>
    </>
    );
}


export default Story;
