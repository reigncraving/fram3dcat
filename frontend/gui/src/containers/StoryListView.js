import React from 'react';
import Story from '../components/Story'
import Axios from 'axios';




class StoryListView extends React.Component {

    // Stories from Django API are strored here
    state = {
        Stories: []
    }

    //Get the data from django
    componentDidMount(){
        Axios.get('http://127.0.0.1:8000/stories/')
        .then(res => {
            this.setState({Stories: res.data}); //res = response data
            console.log(res.data);
        })
    }

    //return as list
    //use div or fragment!!
    render(){
        return(
          <>
            <Story data={this.state.Stories} />
          </>
        );
    }
}

export default StoryListView;
