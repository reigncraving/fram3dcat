import React from 'react';
//import Story from '../components/Story'
import Axios from 'axios';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
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
        job: {}
    }

    onClick = e => {
      window.open(`https://${this.state.job.submition_url}`, '_blank')
    }

    //Get the data from django
    componentDidMount(){
        const JobID = this.props.match.params.JobID;
        Axios.get(`http://127.0.0.1:8000/jobs/author/${JobID}/`)
        .then(res => {
            this.setState({job: res.data}); //res = response data
        })
    }


    render(){
        const isRemote = this.state.job.is_remote;
        const salary = this.state.job.salary;
        const dueDate = this.state.job.dueDate;
        const date = new Date();
        let remoteIndicator;
        if(isRemote){
          remoteIndicator = <span style={{color:"#24ACFF", marginRight:"20px"}}><EnvironmentOutlined/> Remote friendly</span> ;
        }else {
          remoteIndicator = null;
        }

        let salaryIndicator;
        if(salary!=0 && salary>0){
          salaryIndicator = <span style={{color:"#24ACFF", marginRight:"20px"}}><DollarCircleOutlined /> {this.state.job.salary}</span>;
        }else{
          salaryIndicator = null;
        }

        let dateIndicator;
        if(dueDate>date){
          alert("dueDate is smaller")
          alert(date)
          dateIndicator = <span style={{color:"#24ACFF", marginRight:"20px"}}><Tag color="green">Due date: {this.state.job.due_date}</Tag></span>;
        }else{
          dateIndicator = null;
        }

        return(
            <div>
                <Card
                title=<b style={{ textAlign: "center"}}>{this.state.job.headline}</b>
                style={{ width: "70%", marginLeft:"15%" }}

                >
                <span style={{color:"#24ACFF", marginRight:"20px"}}><ClockCircleOutlined />{moment(this.state.job.pub_date).format('DD-MM-YYYY')}</span>

                {salaryIndicator}
                {remoteIndicator}
                <br/>


                <br/>
                <p>Experience: <Tag style={{fontSize:"12pt"}}>{this.state.job.experience}</Tag></p>
                <br/>
                <br/>

                <p> {ReactHtmlParser(this.state.job.body_text)} </p>
                <Tag style={{fontSize:"12pt"}} color="green">Apply before: {this.state.job.due_date}</Tag>

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
