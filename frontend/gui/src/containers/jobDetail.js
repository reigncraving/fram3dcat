import React from 'react';
//import Story from '../components/Story'
import Axios from 'axios';
import { Card,Button,Tag } from 'antd';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {
CalendarOutlined,
ClockCircleOutlined,
DollarCircleOutlined,
EnvironmentOutlined
} from '@ant-design/icons';
//import StoryForm from '../components/StoryForm';


class JobsDetailView extends React.Component {

    // stories from Django API are strored here
    state = {
        Job: {}
    }

    onClick = e => {
      window.open(`https://${this.state.Job.submition_url}`, '_blank')
    }

    //Get the data from django
    componentDidMount(){
        const JobID = this.props.match.params.JobID;
        Axios.get(`http://127.0.0.1:8000/jobs/author/${JobID}`)
        .then(res => {
            this.setState({Job: res.data}); //res = response data
        })
    }

    handleDelete = (event) => {
        const StoryID = this.props.match.params.StoryID;
        Axios.delete(`http://127.0.0.1:8000/stories/${StoryID}`);
          //go back after delete and refresh
        this.pops.history.push('/');
    }

    //return as list also set reqType and ID for form put/post (post in listview)
    // <StoryForm
    // requestType="put"
    // StoryID={this.props.match.params.StoryID}
    // btnText="update"
    //  />
    //  <form onSubmit="handleDelete">
    //     <Button type ="danger" htmlType="submit">Delete</Button>
    //  </form>

    render(){
        return(
            <div>
                <Card
                title={this.state.Job.headline}
                style={{ width: "70%", marginLeft:"15%" }}

                >
                <ClockCircleOutlined />{this.state.Job.pub_date}
                <br/>
                <DollarCircleOutlined /> {this.state.Job.salary}
                        <br/>
                <EnvironmentOutlined /> Remote {this.state.Job.is_remote}
                <br/>
                <br/>
                <br/>
                Get AUTHOR info
                <p> {this.state.Job.body_text} </p>
                <Tag color="green">Due date: {this.state.Job.due_date}</Tag>
                <br/>
                <br/>
                <br/>
                <Button type="primary" onClick={this.onClick}>Apply</Button>
                </Card>
             </div>
        );
    }
}

export default JobsDetailView;
