/**
 * 
 * Styles for Splash Screen  
 * @author Purnima Lamba
 * 
 */

import {
  StyleSheet
} from 'react-native';
import { colorStyle } from '../../Assets/Styles/styleConstant';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorStyle.splashBackground
  }
})

export default styles