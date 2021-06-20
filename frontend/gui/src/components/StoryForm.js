import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class StoryForm extends React.Component {
  //handle submit and post/put it to django api
  handleFormSubmit = (event, requestType, StoryID) => {
    var date = new Date();
    const headline = event.target.elements.headline.value;
    const description = event.target.elements.description.value;
    const body = event.target.elements.body.value;
    const pub_date = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const mod_date = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

    switch (requestType) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/stories/', {
          headline: headline,
          body_text: body,
          pub_date: pub_date,
          mod_date: mod_date,
          description: description,
        })
          .then(res => console.log(res))
          .catch(err => console.err('error'));
      case 'put':
        return axios.put('http://127.0.0.1:8000/stories/${StoryID}/', {
          headline: headline,
          body_text: body,
          pub_date: pub_date,
          mod_date: mod_date,
          description: description,
        })
          .then(res => console.log(res))
          .catch(err => console.err('error'));
    }
    console.log(headline, description, body);
  }
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
          event,
          this.props.requestType,
          this.props.StoryID,
        )} >
          <Form.Item label="Headline">
            <Input name="headline" placeholder="Headline" />
          </Form.Item>

          <Form.Item label="Description" >
            <Input name="descrioption" placeholder="Description" />
          </Form.Item>

          <Form.Item label="Body" >
            <Input name="body" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default StoryForm;
