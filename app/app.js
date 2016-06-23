import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Seriously guys, relay is not fun!!</h1>
            <p>{this.porps.user.name}</p>
        </div>
    }
}

const AppContainer = Relay.createContainer(App,
    {
        initialVariables: {
            id: 1
        },

        fragments: {
            user: () => Relay.QL`
            fragment on User {
                    name
                },
            }
            `,
        },
    }
)

export default AppContainer;