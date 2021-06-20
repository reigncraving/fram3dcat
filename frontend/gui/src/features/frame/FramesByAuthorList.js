import React from 'react';
import FrameList from './components/frameList'
import Axios from 'axios';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
class AuthorFramesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Frame: [],
    };
  }
  componentDidMount() {
    const username = this.props.author;
    Axios.get(`http://127.0.0.1:8000/global/frame_author/?author__username=${username}`)
      .then(res => {
        this.setState({ Frame: res.data }); //res = response data
      })
  }
  render() {
    return (
      <>
        <Collapse defaultActiveKey={['0']} onChange={callback}>
          <Panel header="View Models" key="1">
            <FrameList data={this.state.Frame} action={this.handler} />
          </Panel>
        </Collapse>
      </>
    );
  }
}

export default AuthorFramesList;
