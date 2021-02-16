import React from 'react';
import {
  Layout,
  Menu,
  Switch,
  Button,
  Dropdown,
  message,
  Avatar,
  Badge,
  Drawer,
  BackTop,
/*Breadcrumb*/
} from 'antd';
import {
  SettingOutlined,
  UserOutlined,
  CloudUploadOutlined,
  HomeOutlined,
  LogoutOutlined,
  AlignCenterOutlined,
} from '@ant-design/icons';
import AddFrame from '../containers/AddFrame'
import AddJob from '../containers/AddJob'
import AddStory from '../containers/AddStory'
import { Link, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from '../privateRoute.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../store/actions/auth';
//import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;



export class Fram3dcatLayout extends React.Component{

  static propTypes = {
     auth: PropTypes.object.isRequired,
     logout: PropTypes.func.isRequired,
   };

//drawer for account control
   state = {
     visible: false,
     theme: 'dark',
     current: '1',
     drawer_current:'1',
     drawer_color:'#ffffff',
     id: 0,
   };

   showAccDrawer = () => {
     this.setState({
       visible: true,
     });
   };

   onCloseAccDrawer = () => {
     this.setState({
       visible: false,
     });
   };
//end of drawer

//drawer Menu

    changeTheme = value => {
       this.setState({
         theme: value ? 'dark' : 'light',
         //here is the problem!!!!!!!
         drawer_color: value ? '#000C17' : '#fffffff'
       });
     };

     handleDrawerMenuClick = e => {
       console.log('click ', e);
       this.setState({
         drawer_current: e.key,
       });
     };

//drawer menu end



   state = {
   current: 'Designers',
 };

 handleClick = e => {
   console.log('click ', e);
   this.setState({ current: e.key });
 };

 //window resize:::

 state = {
    windowHeight: window.innerHeight
};

componentDidMount() {
    window.addEventListener('resize', this.handleResize);
}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
}

handleResize = (e) => {
    this.setState({windowHeight: window.innerHeight})
};

//windows resize:::

  render(){
    //menu state
    const { current } = this.state;
    //resize
    const minHeight = this.state.windowHeight - 0;
    //display links for user login status
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <>

        <a onClick={this.showAccDrawer}>
          <Badge count={0} style={{ backgroundColor: 'gray' }} offset={[6, -8]} title="new activities">
            <span className='username' style={{fontSize:"12pt", color:"gray"}}> { user ? ` ${user.username}  ` : '' } </span>
          </Badge>
        </a>
        <Drawer
              width={300}
              placement="right"
              closable={true}
              onClose={this.onCloseAccDrawer}
              visible={this.state.visible}
              bodyStyle={{padding:"0px", backgroundColor: this.state.drawer_color}}
            >

                <Menu
                  theme={this.state.theme}
                  onClick={this.handleDrawerMenuClick}
                  style={{ width: 256 }}

                  selectedKeys={[this.state.drawer_current]}
                  mode="inline"
                >
                  <Menu.Item key="1" title="dashboard" style={{height:"80px"}} onClick={this.onCloseAccDrawer}>

                   <Link to="/dashboard/">
                     <div id="avatar" style={{marginTop:'8px'}} >
                       <span className="avatar-item">
                         <Avatar
                         size={64}
                         shape="circle"
                         src={ user ? `${user.avatar} `: <UserOutlined />}
                         backgroundColor='#87d068' />
                           <span style={{display:"inline"}}>
                             { user ? ` ${user.username}  ` : '' }
                           </span>
                         <HomeOutlined style={{display:"inline", float:'right', marginTop:'22px'}}/>
                       </span>
                     </div>
                   </Link>
                  </Menu.Item>
                  <Menu.Item key="2" tittle="Upload" icon={<CloudUploadOutlined />} onClick={this.onCloseAccDrawer}>
                    <div style={{float:"right"}}>
                        {user.is_designer ? <AddFrame/> : <AddJob/>}
                    </div>
                  </Menu.Item>
                        {user.is_designer ?

                          <>

                          <Menu.Item key ="3" title ="Write" icon = {<AlignCenterOutlined />} onClick={this.onCloseAccDrawer}>
                          <div style={{float:"right"}}>
                          <AddStory/>
                          </div>
                          </Menu.Item>

                        </>

                          : null}
                <Menu.Item key="10" onClick={this.onCloseAccDrawer, event =>  window.location.href='/'}>
                  <Button  type= "danger" icon={<LogoutOutlined />} onClick={this.props.logout} style ={{float:"right"}}> Logout</Button>
                </Menu.Item>
              </Menu>
            </Drawer>

         </>

    )
    const guestLinks = (
      <Link style={{color:"gray"}} to="/login">Login</Link>
    )

    const registerLink = (
      <Link style={{color:"gray"}} to="/register">Register</Link>
    )

    return(
      <Layout style={{minHeight: minHeight, padding:"0 0 0 0"}}>
          <Header style={{zIndex: 1, width: '100%', padding: '0 0 0 0', color: "#EAF0F6",
          backgroundColor: '#3A3B40' }}>

            <Menu
            theme="light"
            mode="horizontal"
            onClick={this.handleClick}
            style={{
              width:'100%',
              display: 'flex',
              justifyContent: 'left',
              color: 'gray',
              backgroundColor: '#FAFAFA',
              float: 'right'
            }}
            >
            <Menu.Item>
              <div className="logo" style={{float:"left", marginLeft:'10px'}}>
                <img src={require('../../src/logo.png')} alt="fram3dcat" width="40" height="40" style ={{float:"left",  margin:"12px 4px 0 0"}}/>
                <h1 style={{float:"left", margin: "0 4px 0 0", color: "#22232B", }}>Fram<b>3D</b>cat</h1>
              </div>
            </Menu.Item>
             <SubMenu title="Flow" style={{marginLeft:'10px'}}>
                 <Menu.Item key="Designers" >
                  <Link  to="/designers">Designers</Link>
                 </Menu.Item>
                 <Menu.Item key="Frames">
                  <Link to="/frames/">Frames</Link>
                 </Menu.Item>
                 <Menu.Item key="Stories">
                  <Link to="/stories">Stories</Link>
                 </Menu.Item>
             </SubMenu>
            <Menu.Item key="Jobs">
            <Link to="/jobs" style={{color:"gray"}}>Job Board</Link>
            </Menu.Item>

             <SubMenu title="Hire">
                 <Menu.Item key="SearchDesigner">
                  <Link to="/search/designer">Search Designers</Link>
                 </Menu.Item>
             </SubMenu>


           <Menu
           theme="light"
           style={{
             position: 'absolute',
             top: 0,
             right: 0,
             color: 'gray',
             backgroundColor: '#FAFAFA',
           }}
           >
             <Menu.Item key="6" style ={{float:"right", marginRight:"10px"}}>
             { isAuthenticated ? authLinks : guestLinks }
             </Menu.Item>
             <Menu.Item key="5" style ={{float:"right", marginRight:"10px"}}>
             {!isAuthenticated ? registerLink : " " }
             </Menu.Item>
           </Menu>
         </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0', paddingLeft:"10%", paddingRight:"10%", marginTop: "0", backgroundColor: "#FAFAFA"  }}>
              <div className="site-layout-background" style={{ padding: 0, minHeight: 380, height:"90%", backgroundColor:"#FAFAFA"}}>

              { this.props.children}

              </div>
          </Content>
          <Footer
          style={{ textAlign: 'center', color:"white", backgroundColor:"#22232B"}}
          >
          Fram3dcat ©2020 - 2021 Created by Teodor Raychev
          </Footer>
      </Layout>
   );
  }
 }


 const mapStateToProps = (state) => ({
   auth: state.auth,
 });


export default withRouter(connect(mapStateToProps, { logout })(Fram3dcatLayout));
//export default withRouter(Fram3dcatLayout);
//export default withRouter(connect(null, mapDispatchToProps)(Fram3dcatLayout));
