import React, { Component } from 'react';
import SpotifyAuthorization from './components/auth/SpotifyAuthorization'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {
        return (
            <div className="Layout">
                <div className="col-md-6">
                    <SpotifyAuthorization></SpotifyAuthorization>
                </div>
                <div className="col-md-6">test</div>
            </div>
        );
    }
}


export default Layout;