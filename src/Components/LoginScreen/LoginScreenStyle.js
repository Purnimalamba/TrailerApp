/**
 * 
 * Styles for Login Screen  
 * @author Purnima Lamba
 * 
 */

import {
  StyleSheet
} from 'react-native';
import { colorStyle, fontSize, fontFamily } from '../../Assets/Styles/styleConstant';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 30,
    backgroundColor: colorStyle.whiteText
  },
  contentView:{
    backgroundColor: colorStyle.whiteText,
    flexDirection:'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  inputView:{
    backgroundColor: colorStyle.whiteText,
    marginLeft: 24,
    marginRight: 40,
    flex: 1,
  },
  errorText:{
    fontSize: fontSize.font_10,
    fontFamily: fontFamily.fontFamilyNormal
  },
  headerText:{
    fontSize: fontSize.font_16,
    fontFamily: fontFamily.fontFamilyBold,
    paddingBottom: 30
  },
  focusedLabel:{
    marginLeft: 2,
    fontSize: fontSize.font_12,
    fontFamily: fontFamily.fontFamilyNormal
  },
  label:{
    top:36,
    marginLeft: 2,
    fontSize: fontSize.font_14,
    fontFamily: fontFamily.fontFamilyNormal,
  },
  termsStyle:{
    fontSize: fontSize.font_12,
    fontFamily: fontFamily.fontFamilyNormal
  },
  termsStyleUnderline:{
    fontSize: fontSize.font_12,
    fontFamily: fontFamily.fontFamilyNormal,
    textDecorationLine: 'underline'
  },
  unSelected:{
    backgroundColor:colorStyle.whiteText,
    borderWidth:2,
    borderColor:colorStyle.blackBackredground,
    borderRadius:4,
    height: 20,
    width: 20
  }
})

export default styles