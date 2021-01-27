import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { connect } from 'react-redux';
import MainRouter from './routes';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { loadUser } from './store/actions/auth';
import store from './store/store';
//import * as actions from './store/actions/auth';

import Alerts from './components/Alerts'
import AlertTemplate from 'react-alert-template-basic';
import {Provider as AlertProvider } from 'react-alert';

import Fram3dcatLayout from './containers/Layout';
//import DropList from './containers/DropListView';

//Alert Options
const alertOptions = {
  timeout: 10000,
  position: 'top center',
};

const alertTemplate = AlertTemplate;

class App extends Component {

//check always if the user is logged in...
  componentDidMount() {
    store.dispatch(loadUser());
    //this.props.onTryAutoSignup();
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions} >
          <Router>
            <Fragment>
              <Alerts />
                <Fram3dcatLayout{...this.props}>
                    <MainRouter/>
                </Fram3dcatLayout>
            </Fragment>
           </Router>
          </AlertProvider>
        </Provider>
    );
  }
}



// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.token !== null
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   }
// }

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);;
