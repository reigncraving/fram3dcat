import React from 'react';
import Frame from './components/frame'
import Axios from 'axios';

class FramesListView extends React.Component {
    constructor(props) {
        super(props)
        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);
        // Set some state
        this.state = {
            reaload: false,
            Frame: [],
        };
    }

    handler() {
        window.location.reload();
        this.setState({
            reload: true
        });
        this.forceUpdate();
    }

    componentDidMount() {
        Axios.get(`http://127.0.0.1:8000/global/frame_author/`)
            .then(res => {
                this.setState({ Frame: res.data }); //res = response data
            })
    }

    render() {
        return (
            <>
                <Frame data={this.state.Frame} action={this.handler} />
            </>
        );
    }
}

export default FramesListView;
