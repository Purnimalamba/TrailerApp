/**
 * 
 * Splash Screen  
 * @author Purnima Lamba
 * 
 */

import React from 'react';
import {AsyncStorage} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CustomImage from '../CommonComponents/CustomImage';
import getImages from '../../Assets/Constants/ImageConstants';
import styles from './SplashScreenStyle'
const Images = getImages()

export default class SplashComponent extends React.Component {

  
  componentDidMount(){
    setTimeout(() => {
          AsyncStorage.getItem('onceVisited').then((data) => {
              if (!data) {
                this.props.navigation.navigate('Login')
              } else {
                this.props.navigation.navigate('Dashboard')
            }
          })
          }, 2000);
  }                                   

  render() {
    return (
      <SafeAreaView style={styles.mainView}>
        <CustomImage
          style={{height: 102,width: 102}}
          resizeMode='contain'
          source={Images.SplashIcon}
        />
      </SafeAreaView>
    );
  }
}