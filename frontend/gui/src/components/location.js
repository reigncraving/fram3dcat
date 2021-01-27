import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../store/actions/auth';
import { Card } from 'antd';

class LocationView extends React.Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
    // stories from Django API are strored here
    state = {
        Location: {}
    }

    //Get the data from django
    handleDisplay = (e) => {
        const LocationID = e;
        Axios.get(`http://127.0.0.1:8000/global/location/${LocationID}`)
        .then(res => {
            this.setState({Location: res.data}); //res = response data
        })
    }

    handleDelete = (e) => {
        const LocationID = e;
        Axios.delete(`http://127.0.0.1:8000/global/location/${LocationID}`);
          //go back after delete and refresh
        this.pops.history.push('/');
    }


    render(){
      const { isAuthenticated, user } = this.props.auth;
        return(
          <>
          <div onload={this.handleDisplay(1)}>
            <p>Country: <b>{this.state.Location.country}</b></p>
            <p>Zip code: <b>{this.state.Location.zip_code}</b></p>
            <p>State: <b>{this.state.Location.state}</b></p>
            <p>Address: <b>{this.state.Location.address_line1}</b></p>
          </div>

          </>
        );
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(LocationView));
//export default LocationView;
