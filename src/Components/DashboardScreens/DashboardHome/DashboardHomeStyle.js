

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
  nameText: {
    alignSelf:'center',
    fontSize: fontSize.font_24,
    fontFamily: fontFamily.fontFamilyBold,
  },
  textView:{
    position:'absolute',
    top:30,
    alignSelf:'center',
    flexDirection:'row'
  },
  playView:{
    position:'absolute',
    top:60,
    alignSelf:'center',
    padding:10,
    borderRadius:5,
    flexDirection:'row',
    backgroundColor: colorStyle.whiteText,
  },
  pullText:{
    position:'absolute',
    top:20,
    alignSelf:'center',
  },
  duration:{
    fontSize: fontSize.font_12,
    fontFamily: fontFamily.fontFamilyBold,
  },
  teasure:{
    marginLeft:16,
    paddingTop:32,
    paddingBottom:12,
    fontSize: fontSize.font_12,
    fontFamily: fontFamily.fontFamilyNormal,
  },
  gradientView:{
    height:'20%'
  },
  infoView:{
   backgroundColor: colorStyle.whiteText, 
   padding:8,
   flexDirection:'row',
   justifyContent:'space-between'
  },
  teasureName:{
    fontSize: fontSize.font_14,
    fontFamily: fontFamily.fontFamilyBold,
  },
  postedBy:{
    fontSize: fontSize.font_12,
    fontFamily: fontFamily.fontFamilyNormal,
  },
  playImage:{
    width: 24, 
    height: 24,
    marginRight:5,
    alignSelf:'center'
  }
})

export default styles