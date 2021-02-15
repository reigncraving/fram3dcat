import React from 'react';
//import Story from '../components/Story'
import Axios from 'axios';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { Card,Button,Tag,Avatar } from 'antd';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {
CalendarOutlined,
ClockCircleOutlined,
DollarCircleOutlined,
EnvironmentOutlined
} from '@ant-design/icons';
//import StoryForm from '../components/StoryForm';

const AvatarText = ({ source, text }) => (
  <span>
    <Avatar size={64} src={source} />
    <b style={{fontSize:"11pt", marginLeft:"10px"}}>{text}</b>
  </span>
);


class StoryDetailView extends React.Component {

    // stories from Django API are strored here
    state = {
        stories: [],
        author: [],
    }


    //Get the data from django
    componentDidMount(){
        const StoryID = this.props.match.params.StoryID;
        Axios.get(`http://127.0.0.1:8000/stories/author_info/${StoryID}/`)
        .then(res => {
            this.setState({stories: res.data}); //res = response data
            this.setState({author: this.state.stories.author})
            console.log(this.state.stories.author)
        })
    }


    render(){

        return(
            <div>
                <Card
                title=<b style={{ textAlign: "center"}}>{this.state.stories.headline}</b>
                cover = <img src={this.state.stories.headline_photo} />
                style={{ width: "70%", marginLeft:"15%" }}

                >

                <span style={{color:"#24ACFF", marginRight:"20px"}}><ClockCircleOutlined />{moment(this.state.stories.pub_date).format('DD-MM-YYYY')}</span>
                <br/>
                <br/>

                <br/>

                <p> {ReactHtmlParser(this.state.stories.body_text)} </p>

                <br/>
                <br/>

                <br/>
                <b>Author:</b>
                <br/>
                <AvatarText
                    source= {this.state.author.avatar}
                    text = {this.state.author.username}
                 />
                </Card>
             </div>
        );
    }
}

export default StoryDetailView;
