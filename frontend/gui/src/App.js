import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { loadUser } from './store/actions/auth';
import store from './store/store';
import Alerts from './components/Alerts'
import AlertTemplate from 'react-alert-template-basic';
import { Provider as AlertProvider } from 'react-alert';
import Fram3dcatLayout from './features/layout/Layout';

const alertOptions = {
  timeout: 10000,
  position: 'top center',
};

class App extends Component {
  //check always if the user is logged in...
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions} >
          <Router>
            <Fragment>
              <Alerts />
              <Fram3dcatLayout{...this.props}>
              <MainRouter />
              </Fram3dcatLayout>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
