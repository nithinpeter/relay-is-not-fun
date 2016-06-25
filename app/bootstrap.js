import Relay from 'react-relay';
import AppContainer from './app';

class AppRoute extends Relay.Route {
  static queries = {
    user: () => Relay.QL`
      query { user(id: $userID) }
    `,
  };
  static paramDefinitions = {
    userID: {required: true},
  };
  static routeName = 'AppRoute';
}


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:4000/graphql')
);


var appRoute = new AppRoute({userID: 1});

const RootContainer = <Relay.RootContainer
        Component={AppContainer}
        route={appRoute}
    />

export default RootContainer;
