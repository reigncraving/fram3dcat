import React from 'react';
//import Story from '../components/Story'
import Axios from 'axios';
import { Card } from 'antd';


//import StoryForm from '../components/StoryForm';


class StoryDetailView extends React.Component {

    // stories from Django API are strored here
    state = {
        Stories: {}
    }

    //Get the data from django
    componentDidMount(){
        const StoryID = this.props.match.params.StoryID;
        Axios.get(`http://127.0.0.1:8000/stories/${StoryID}`)
        .then(res => {
            this.setState({Stories: res.data}); //res = response data
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
                <Card title={this.state.Stories.headline}>
                <p> {this.state.Stories.body_text} </p>
                </Card>
             </div>
        );
    }
}

export default StoryDetailView;
