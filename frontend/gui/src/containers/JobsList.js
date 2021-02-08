import React from 'react';
import Job from '../components/job'
import FrameViewer from '../containers/FrameViewer'
import Axios from 'axios';




class JobsListView extends React.Component {

  constructor(props) {
          super(props)

          // Bind the this context to the handler function
          this.handler = this.handler.bind(this);

          // Set some state
          this.state = {
              reaload: false,
              Jobs: [],
          };
      }

      handler() {
         window.location.reload();
              this.setState({
                  reload: true
              });
              this.forceUpdate();
          }

  //Get the data from django
  componentDidMount(){
      Axios.get(`http://127.0.0.1:8000/jobs/all/`)
      .then(res => {
          this.setState({Jobs: res.data}); //res = response data
      })
  }


    render(){
        return(
          <>
            <Job data={this.state.Jobs} action={this.handler} />
          </>
        );
    }
}


export default JobsListView;
