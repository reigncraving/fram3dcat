import React from 'react';
import { Route } from 'react-router-dom';
import StoryListView from './features/story/StoryListView';
import StoryDetailView from './features/story/StoryDetailView';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import UpdatePass from './features/profile/UpdatePassword';
import DeleteAccount from './features/profile/DeleteAccount';
import Dashboard from './features/dashboard/Dashboard';
import FrameViewer from './features/frame/FrameViewer';
import FramesListView from './features/frame/FramesListView';
import JobsListView from './features/job/JobsList';
import JobsDetailView from './features/job/jobDetail';
import DesignersListView from './features/designers/DesignersListView';
import Profile from './features/profile/Profile';
import SearchDesigner from './features/designers/SearchDesigner';

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
