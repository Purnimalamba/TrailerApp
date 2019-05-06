/**
 * 
 * Styles for Login Screen  
 * @author Purnima Lamba
 * 
 */

import {
  StyleSheet
} from 'react-native';
import { colorStyle, fontSize, fontFamily } from '../../../Assets/Styles/styleConstant';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colorStyle.detailBackground,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardView:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor:colorStyle.whiteText,
    width:'100%'
  },
  editText:{
    fontFamily:fontFamily.fontFamilyBold,
    fontSize: fontSize.font_12,
  },
  labelText:{
    fontFamily:fontFamily.fontFamilyNormal,
    fontSize: fontSize.font_12,
  },
  infoText:{
    paddingTop: 4,
    fontFamily:fontFamily.fontFamilyBold,
    fontSize: fontSize.font_18,
  },
  versionText:{
    fontFamily:fontFamily.fontFamilyNormal,
    fontSize: fontSize.font_12,
  },
  demoView:{
    alignSelf:'center',
    alignItems: 'center',
    paddingBottom: 20
  }
})

export default styles