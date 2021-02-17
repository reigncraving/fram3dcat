import React from 'react';
import Job from '../components/job'
import Axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux' ;
import { Button, Card, Input, Space, Select } from 'antd';
import { WarningOutlined } from '@ant-design/icons'
import { loadUser } from '../store/actions/auth';
import Designer from '../components/designer'

const { Search } = Input;
const { Option } = Select;


class SearchDesigner extends React.Component {


state={
    result: [],
}

  componentDidMount(){
     
  }

  onNameSearch = (value) =>{
    Axios.get(`http://127.0.0.1:8000/accounts/auth/alldesigners/?username=${value}`)
    .then(res => {
        this.setState({result: res.data}); //res = response data
    })
    console.log(this.state.result)
  };

  handleWorkSelectChange = (value) => {
    Axios.get(`http://127.0.0.1:8000/accounts/auth/alldesigners/work/user/?work_fields=${value}`)
    .then(res => {
        this.setState({result: res.data}); //res = response data
    })
    console.log(this.state.result)
  }

  handleSkillSelectChange = (value) => {
    
    Axios.get(`http://127.0.0.1:8000/accounts/auth/alldesigners/skills/User/?skills=${value}`)
    .then(res => {
        this.setState({result: res.data}); //res = response data
    })
    console.log(this.state.result)
  }

    render(){

      const { isAuthenticated } = this.props.auth;
        return(
          <>
            {isAuthenticated
              ?
              <>
                <Card style={{float:"right"}}>
                    <Space direction="vertical">
                        search by username:
                        <Search
                        placeholder="search by username"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={this.onNameSearch}
                        />
                        search by Field of work:
                    <div>
                        <Select
                        name= "work"
                        showSearch
                        size="large"
                        placeholder="Select a field"
                        optionFilterProp="children"
                        onSearch={this.onSearch}
                        onChange={this.handleWorkSelectChange}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value=" ">none</Option>
                        <Option value="RIGGING">Rigging</Option>
                        <Option value="MODELLING">Modeling</Option>
                        <Option value="VFX">Visual effects</Option>
                        <Option value="TEXTURING">Texturing</Option>
                        <Option value="ANIMATION">Animation</Option>
                        <Option value="FILM">Film and Media Arts</Option>
                        <Option value="GAME_DESIGN">Games design</Option>
                        <Option value="RENDERING">Rendering artist</Option>
                        <Option value="LIGHTNING">Lightning artist</Option>
                        <Option value="BACKGROUND">Background artist</Option>
                        <Option value="GRAPHIC_DESING">Graphic design</Option>
                        <Option value="PRODUCT_DESIGN">Product design</Option>
                        <Option value="CHARACTER_DESIGN">Character design</Option>
                        <Option value="WEBSITE_DESIGNER">3D website design</Option>
                        <Option value="INTERACTIVE_DESIGN">Interactive design</Option>
                        <Option value="CHARACTER_ANIMATATION">Character Animation</Option>
                    </Select>
                     </div>
                     search by Field of skills:
                     <Select
                        showSearch
                        size="large"
                        placeholder="Select a skill"
                        optionFilterProp="children"
                        onChange={this.handleSkillSelectChange}
                        defaultValue={this.props.skills}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value=" ">none</Option>
                        <Option value="QUICKLEARNER">Quick learner</Option>
                        <Option value="ARTISTIC">Artistic skills</Option>
                        <Option value="TIME_MANAGEMENT">Time management</Option>
                        <Option value="TEAMWORK">Teamwork</Option>
                        <Option value="COMMUNICATION">Communication</Option>
                        <Option value="ENGINEERING">Engineering</Option>

                </Select>
                    </Space>
                </Card>


                <Card style={{float:"left", width:"70%"}} >
                    <Designer data={this.state.result} />
                </Card>
                </>
              :
                <>
                 <Card>
                  <div style={{marginTop:"100px", marginLeft:"40%"}}>
                  <WarningOutlined/>
                  <span style={{color:"gray"}}>Please <b>login</b> to search for designer</span>
                  <br/>
                  <br/>

                  <Button type="primary" style={{marginLeft:"10%"}}>
                    <Link to='/login'>Login</Link>
                  </Button>
                  </div>
                </Card>
                </>
            }
          </>
        );
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, {loadUser})(SearchDesigner));
