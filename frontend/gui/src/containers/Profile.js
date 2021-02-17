import React from 'react';
import Axios from 'axios';
import {
  Card,
  Avatar,
  Button,
  Tag,
  Collapse,
} from 'antd';
import {
  EnvironmentOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  loadProfile } from '../store/actions/auth';
import {  withRouter } from 'react-router-dom';
import moment from 'moment';
import FrameList from '../components/frameList';
import Story from '../components/Story';
const { Meta } = Card;

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

class Profile extends React.Component {


  static propTypes = {
     auth: PropTypes.object.isRequired,
   };

   state = {
    loading: false,
    work_fields: [],
    Frame: [],
    stories: [],
  };

  onLinkClick = e => {
    window.open(`https://${this.props.profile.website}`, '_blank')
  }
  componentDidMount(){
    const user_ID = this.props.match.params.user_ID;
    this.props.loadProfile(user_ID)

      Axios.get(`http://127.0.0.1:8000/global/frame_author/?author__id=${user_ID}`)
      .then(res => {
          this.setState({Frame: res.data}); //res = response data
      })

      Axios.get(`http://127.0.0.1:8000/stories/author_info/?author__id=${user_ID}`)
      .then(res => {
          this.setState({stories: res.data}); //res = response data
          console.log(res.data);
      })

  }

  render() {

    return (
      <>
        <Card
        >
          <Meta
              avatar = {<Avatar
              size={128}
              shape="circle"
              src={this.props.profile.avatar}
              backgroundColor='#87d068' />
            }
            title={
              <>
              <b style={{fontSize:"14pt"}}>{this.props.profile.username}</b>
              <br/>
              <span style={{color:"blue"}}>{this.props.profile.first_name}</span>
              <span style={{color:"blue", marginLeft:"5px"}}>{this.props.profile.last_name}</span>
              </>

            }
            description={
              <>
              {this.props.profile.email}<br/>
              <div>member since: {moment(this.props.profile.date_joined).format('DD-MM-YYYY')}</div>

              <a href={"https://"+this.props.profile.website} target="_blank">{this.props.profile.website}</a>
              </>
            }
          />
         <br/>
         <br/>

          {this.props.profile.company_name ?
            <>
            <span style={{color:"gray", marginRight:"5px"}}>works at: </span>
            {this.props.profile.company_name}</>
            :
            null
          }
          {this.props.profile.position ?
            <>
                {this.props.profile.company_name !== "" ?
                <span style={{color:"gray", marginRight:"5px", marginLeft:"5px"}}>as </span>
                :
                null
                }
             {this.props.profile.position}</>
            :
            null
          }
            <br/>
          {this.props.profile.work_fields !== "" ?
            <> Fields of work: <Tag> {this.props.profile.work_fields}</Tag></>
            :
            null
          }
          {this.props.profile.skills !== "" ?
            <> Skills: <Tag> {this.props.profile.skills}</Tag></>
            :
            null
          }
          <br/>
          <br/>
            { this.props.profile.Location !== "" ?
              <>
              <EnvironmentOutlined />
              <b>{this.props.profile.state}</b>
              <b>, </b>
              <b>{this.props.profile.country}</b><br/>
              </>
              :
              null
            }

      
          <br/>
        {this.props.profile.is_designer ?
        <>
          <Card>
          <Collapse defaultActiveKey={['0']} onChange={callback}>
            <Panel header="View Models" key="1">
              <FrameList data={this.state.Frame} />
            </Panel>
            </Collapse>
        </Card>
        <Card>
          <Collapse defaultActiveKey={['0']} onChange={callback}>
            <Panel header="View Stories" key="2">
              <Story data={this.state.stories} />
            </Panel>
            </Collapse>
        </Card>
          </>
        :
       null
        }
        </Card>
        
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
});


export default withRouter(connect(mapStateToProps, { loadProfile })(Profile));
