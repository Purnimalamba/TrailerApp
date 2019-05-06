/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import CustomNavigation from './src/Utility/Navigation'
import LoginStore from './src/Stores/LoginStore'
import EditDetailStore from './src/Stores/EditDetailStore'

const stores = {
  LoginStore,
  EditDetailStore
}

export default class App extends Component<Props> {
  componentDidMount(){
    
  }
  

  render() {
    return (
      <Provider {...stores}>
        <CustomNavigation />
      </Provider>
    );
  }
}
