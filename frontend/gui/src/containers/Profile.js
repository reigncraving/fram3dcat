import React from 'react';

import {
  Menu,
  Card,
  Avatar,
  Badge,
  Button,
  Tabs,Upload,
  message,
  Form,
  List,
  Tag,
} from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  BankOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
  EditOutlined,
  RocketOutlined,
  EnvironmentOutlined,
  KeyOutlined,
  LoadingOutlined,
  PlusOutlined
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout, auth, loadProfile } from '../store/actions/auth';
import MyFrames from '../containers/MyFrames'
import { Link, withRouter, Redirect } from 'react-router-dom';
import moment from 'moment';

const { Meta } = Card;

class Profile extends React.Component {


  static propTypes = {
     auth: PropTypes.object.isRequired,
   };

   state = {
    loading: false,
    work_fields: [],
  };

  onLinkClick = e => {
    window.open(`https://${this.props.profile.website}`, '_blank')
  }
  componentDidMount(){
    const user_ID = this.props.match.params.user_ID;
    this.props.loadProfile(user_ID)

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
                {this.props.profile.company_name != "" ?
                <span style={{color:"gray", marginRight:"5px", marginLeft:"5px"}}>as </span>
                :
                null
                }
             {this.props.profile.position}</>
            :
            null
          }
            <br/>
          {this.props.profile.work_fields ?
            <> Fields of work: <Tag> {this.props.profile.work_fields}</Tag></>
            :
            null
          }
          {this.props.profile.skills ?
            <> Skills: <Tag> {this.props.profile.skills}</Tag></>
            :
            null
          }
          <br/>
          <br/>
            { this.props.profile.Location != " " ?
              <>
              <EnvironmentOutlined />
              <b>{this.props.profile.state}</b>
              <b>, </b>
              <b>{this.props.profile.country}</b><br/>
              </>
              :
              null
            }

          <Button style={{float: "right"}}>Send Message</Button>
          <br/>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
});


export default withRouter(connect(mapStateToProps, { loadProfile })(Profile));
