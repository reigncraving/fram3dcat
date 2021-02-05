import React from 'react';
import Designer from '../components/designer'
import FrameViewer from '../containers/FrameViewer'
import Axios from 'axios';




class DesignersListView extends React.Component {

  constructor(props) {
          super(props)

          // Bind the this context to the handler function
      //    this.handler = this.handler.bind(this);

          // Set some state
          this.state = {
              reaload: false,
              Designers: [],
          };
      }

      handler() {
          window.location.reload();
              this.setState({
                  reload: true
              });
          }

  //Get the data from django
  componentDidMount(){
      Axios.get(`http://127.0.0.1:8000/accounts/auth/alldesigners`)
      .then(res => {
          this.setState({Designers: res.data}); //res = response data
      })
  }


    render(){
        return(
          <>
            <Designer data={this.state.Designers}/>
          </>
        );
    }
}

export default DesignersListView;
