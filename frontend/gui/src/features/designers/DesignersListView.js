import React from 'react';
import Designer from './components/designer'
import Axios from 'axios';

class DesignersListView extends React.Component {

    constructor(props) {
        super(props)
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
    componentDidMount() {
        Axios.get(`http://127.0.0.1:8000/accounts/auth/alldesigners`)
            .then(res => {
                this.setState({ Designers: res.data }); //res = response data
            })
    }

    render() {
        return (
            <Designer data={this.state.Designers} />
        );
    }
}

export default DesignersListView;
