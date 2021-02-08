import React, { useState } from 'react';

import {
  Menu,
  Card,
  Upload,
  Avatar,
  Badge,
  Button,
  Tabs,
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
  PlusOutlined,
  FormOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout, auth, loadUser } from '../store/actions/auth';
import AddFrame from '../containers/AddFrame'
import AddJob from '../containers/AddJob'
import ImageUploader from '../components/ImageUploader'
import UpdatePersonalInfo from '../containers/UpdatePersonalInfo'
import UpdateProffesionalInfo from '../containers/UpdateProffesionalInfo'
import UpdateLocation from '../containers/UpdateLocation'
import UpdateCompanyInfo from '../containers/UpdateCompanyInfo'
import MyFrames from '../containers/MyFrames'
import { Link, withRouter, Redirect } from 'react-router-dom';

const { TabPane } = Tabs;


//avatar:
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}


//avatar/

class Dashboard extends React.Component {


  static propTypes = {
     auth: PropTypes.object.isRequired,
   };

   state = {
    loading: false,
    work_fields: [],
  };

// onImageUploadFinish = e => {
//   this.props.auth.user.avatar = this.state.avatar;
// };

//avatar: magic here....
handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  // static getDerivedStateFromProps(props, state) {
  //     // return an object to update the state.
  //     return props.auth;
  // }


  // get user info
//   componentDidMount(){
//     const UserID = this.props.match.params.UserID;
//     Axios.get(`http://127.0.0.1:8000/accounts/auth/user/${UserID}`)
//     .then(res => {
//         this.setState({User: res.data}); //res = response data
//     })
// }

  render() {
    const { user } = this.props.userData;
    const { loading, imageUrl } = this.state;
    const tabName = "";
    const tabIcon = null;
    const uploadButton = (
       <div>
         {loading ? <LoadingOutlined /> : <PlusOutlined />}
         <div style={{ marginTop: 8 }}>Upload</div>
       </div>
     );
     const DesignerView = (
      <>
        <Card>
          <div id="avatar" style={{marginTop:'8px',  marginRight:"50px", float:"left"}} >
            <span className="avatar-item">
              <Avatar
              size={128}
              shape="circle"
              src={user.avatar}
            />
            </span>
          </div>
          <div style={{fontSize:"16pt", marginTop:'8px', }}>
          <b>{user.username}</b>
          </div>
          <div style={{fontSize:"12pt", marginTop:'8px', }}>
          {user.email}
          </div>
          <div style={{fontSize:"12pt", marginTop:'8px', }}>
          </div>
          <div style={{fontSize:"14pt", marginTop:'8px', color:"blue" }}>

          </div>

        </Card>
        <Card>
        <Tabs tabPosition="left" defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <SettingOutlined/>
                Account
              </span>
            }
            key="1"
          >
            <span name="UpdatePersonalInfo" style={{float:"right"}} >
              <UpdatePersonalInfo
                userID = {user.id}
                firstName = {user.first_name}
                lastName = {user.last_name}
                website = {user.website}
                is_designer= {user.is_designer}
                />
            </span>
            <InfoCircleOutlined /> Information:
              <br/>
              <br/>
              username:
            <b style={{marginLeft:"5px"}}>{user.username}</b>
              <br/>
              Names:
            <b style={{marginLeft:"5px"}}>{user.first_name}</b>
            <b style={{marginLeft:"5px"}}>{user.last_name}</b>
              <br/>
              Email:
            <b style={{marginLeft:"5px"}}>{user.email}</b>
              <br/>
              Website:
            <a style={{marginLeft:"5px"}} href={user.website}>{user.website}</a>
              <br/>
              Member since:
            <b style={{marginLeft:"5px"}}>{user.date_joined}</b>
              <br/>
              <br/>
              <hr style={{borderColor : '#ffffff', height:"0.5px"}}/>
              <br/>
              <span name="UpdatePersonalInfo" style={{float:"right"}} >
              <UpdateProffesionalInfo
                userID = {user.id}
                work_fields = {user.work_fields}
                company_name = {user.company_name}
                position = {user.position}
                skills = {user.skills}
                />
            </span>
              <RocketOutlined/>
              Profesional:
              <br/>
              <br/>
              Field of work:
              <b style={{marginLeft:"5px"}}><Tag>{user.work_fields}</Tag></b>
              <br/>
              Company / Project:
              <b style={{marginLeft:"5px"}}>{user.company_name}</b>
              <br/>
              Position:
              <b style={{marginLeft:"5px"}}>{user.position}</b>
              <br/>
              Skills:
              <b style={{marginLeft:"5px"}}><Tag>{user.skills}</Tag></b>
              <br/>
              <br/>
              <hr style={{borderColor : '#ffffff', height:"0.5px"}}/>
              <br/>
              <span name="UpdatePersonalInfo" style={{float:"right"}} >
              <UpdateLocation
                userID = {user.id}
                address_line = {user.address_line}
                zip_code = {user.zip_code}
                state = {user.state}
                country = {user.country}
                />
              </span>

              <EnvironmentOutlined />
              Location:
              <br/>
              <br/>
              Country: <b>{user.country}</b><br/>
              Zip code: <b>{user.zip_code}</b><br/>
              State: <b>{user.state}</b><br/>
              Address: <b>{user.address_line}</b><br/>
              <br/>
              <br/>
              <br/>
              <hr style={{borderColor : '#ffffff', height:"0.5px"}}/>
              <Link to="/update/password">
                    <Button icon={<KeyOutlined />}type="primary" style={{float:"left", marginRight:"20px"}}>Change Password</Button>
              </Link>
              <Link to="/delete/account">
                    <Button icon={<UserOutlined />}type="danger" style={{float:"left"}}>Delete account</Button>
              </Link>


          </TabPane>
          <TabPane
            tab={
              <span>
                <UserOutlined />
                Avatar
              </span>
            }
            key="2"
          >
            <p>Avatar</p>

            <ImageUploader id={user.id}/>


          </TabPane>

          <TabPane
            tab={
              <span>
                <AppstoreOutlined />
                Frames
              </span>
            }
            key="3"
          >
            <div style={{float:"right"}}><AddFrame/></div>
            <p>My Frames:</p>
            <MyFrames username={user.username}></MyFrames>
          </TabPane>


          <TabPane
            tab={
              <span>
                <EditOutlined />
                Stories
              </span>
            }
            key="4"
          >
            Tab 3
          </TabPane>
          <TabPane
            tab={
              <span>
                <UsergroupAddOutlined />
                Followers
              </span>
            }
            key="5"
          >
            Tab 4
          </TabPane>
        </Tabs>
        </Card>

      </>
     );

     const CompanyView = (
      <>
      <Card>
        <div id="avatar" style={{marginTop:'8px',  marginRight:"50px", float:"left"}} >
          <span className="avatar-item">
            <Avatar
            size={128}
            shape="circle"
            src={user.avatar}
            />
          </span>
        </div>
        <div style={{fontSize:"16pt", marginTop:'8px', }}>
        <b>{user.username}</b>
        </div>
        <div style={{fontSize:"12pt", marginTop:'8px', }}>
        {user.email}
        </div>
        <div style={{fontSize:"12pt", marginTop:'8px', }}>
        </div>
        <div style={{fontSize:"14pt", marginTop:'8px', color:"blue" }}>

        </div>

      </Card>
      <Card>
      <Tabs tabPosition="left" defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <SettingOutlined/>
              Account
            </span>
          }
          key="1"
        >
          <span name="UpdatePersonalInfo" style={{float:"right"}} >
            <UpdatePersonalInfo
              userID = {user.id}
              firstName = {user.first_name}
              lastName = {user.last_name}
              website = {user.website}
              is_designer= {user.is_designer}
              />
          </span>
          <InfoCircleOutlined /> Information:
            <br/>
            <br/>
            username:
          <b style={{marginLeft:"5px"}}>{user.username}</b>
            <br/>
            <br/>
            Email:
          <b style={{marginLeft:"5px"}}>{user.email}</b>
            <br/>
            Website:
          <a style={{marginLeft:"5px"}} href={user.website}>{user.website}</a>
            <br/>
            Member since:
          <b style={{marginLeft:"5px"}}>{user.date_joined}</b>
            <br/>
            <br/>

            <br/>


            <Link to="/update/password">
                  <Button icon={<KeyOutlined />}type="primary" style={{float:"left"}}>Change Password</Button>
            </Link>
        </TabPane>
        <TabPane
          tab={
            <span>
              <UserOutlined />
              Avatar
            </span>
          }
          key="2"
        >
        <p>Avatar</p>

        <ImageUploader id={user.id}/>

        </TabPane>

        <TabPane
          tab={
            <span>
              <FormOutlined />
              Jobs
            </span>
          }
          key="3"
        >
          <div style={{float:"right"}}><AddJob/></div>
          <p>Job posts:</p>
          //<MyFrames username={user.username}></MyFrames>
        </TabPane>

        <TabPane
          tab={
            <span>
              <BankOutlined />
              Comapany
            </span>
          }
          key="4"
        >
          <div style={{float:"right"}}>
          <UpdateCompanyInfo
              userID = {user.id}
              company_name = {user.company_name}
              website = {user.website}
              work_fields = {user.work_fields}
              address_line = {user.address_line}
              zip_code = {user.zip_code}
              state = {user.state}
              country = {user.country}
          />
          </div>
          <p>My Comapny:</p>
          <RocketOutlined/>
            <b>Profesional: </b>
                <br/>
                <br/>
                Company:
                <b style={{marginLeft:"5px"}}>{user.company_name}</b>
                <br/>
                Website:
                <b style={{marginLeft:"5px"}}>{user.website}</b>
                <br/>
                Field of work:
                <b style={{marginLeft:"5px"}}>{user.work_fields}</b>
                <br/>
                <br/>

          <EnvironmentOutlined />
            <b>Location:</b>
            <br/>
            <br/>
            Country: <b>{user.country}</b><br/>
            Zip code: <b>{user.zip_code}</b><br/>
            State: <b>{user.state}</b><br/>
            Address: <b>{user.address_line}</b><br/>
            <br/>
            <br/>
            <br/>

        </TabPane>
      </Tabs>
      </Card>

    </>

     );

    return (
      <>
      {user.is_designer ? DesignerView : CompanyView}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.auth,
});


export default withRouter(connect(mapStateToProps, { logout, loadUser })(Dashboard));
