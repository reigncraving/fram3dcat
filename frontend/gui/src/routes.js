import React from 'react';
import { Route } from 'react-router-dom';
import StoryListView from './containers/StoryListView';
import StoryDetailView from './containers/StoryDetailView';
import Login from './containers/Login';
import Register from './containers/Register';
import UpdatePass from './containers/UpdatePassword';
import DeleteAccount from './containers/DeleteAccount';
import Dashboard from './containers/Dashboard';
import FrameViewer from './containers/FrameViewer';
import FramesListView from './containers/FramesListView';
import JobsListView from './containers/JobsList';
import JobsDetailView from './containers/jobDetail';
import DesignersListView from './containers/DesignersListView';
import Profile from './containers/Profile';
import SearchDesigner from './containers/SearchDesigner';

//basic router
const MainRouter = () => (
    <div>
        <Route exact path='/stories' component={StoryListView}/>
        <Route exact path='/stories/:StoryID' component={StoryDetailView}/>
        <Route exact path='/designers' component={DesignersListView}/>
        <Route exact path="/Login/" component={Login} />
        <Route exact path='/register/' component={Register}/>
        <Route exact path='/update/password' component={UpdatePass}/>
        <Route exact path='/delete/account' component={DeleteAccount}/>
        <Route exact path='/frames/' component={FramesListView}/>
        <Route exact path='/frames/:FrameID/' component={FrameViewer}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/jobs/' component={JobsListView}/>
        <Route exact path='/jobs/:JobID' component={JobsDetailView}/>
        <Route exact path='/profile/:user_ID' component={Profile}/>
        <Route exact path='/search/designer/' component={SearchDesigner}/>
    </div>
);

export default MainRouter;
