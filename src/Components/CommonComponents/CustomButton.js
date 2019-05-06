
/**** Contains common button
 * 
 *  Parameters those you can pass in this compoenent 
 * 
 * boxStyle : Style of button box else it will take default one 
 * textStyle : Style of text else it will take default one 
 * buttonText : Text for the button 
 * ImageSource : Source of the image for displaying image with the button text
 * @author Purnima Lamba
 **/

import React from 'react';
import { TouchableOpacity,Text ,StyleSheet,Image} from 'react-native';
import { colorStyle,fontSize,fontFamily } from '../../Assets/Styles/styleConstant';

const Button = (props) => {
  return (
    <TouchableOpacity 
      disabled={props.disabled?props.disabled:false}
      activeOpacity={0.8}
      style={[props.boxStyle?props.boxStyle:styles.buttonBox]}
      onPress={props.onPress}
    >
      <Text style={[props.textStyle?props.textStyle:styles.buttonText]}>{props.buttonText?props.buttonText:'Add text'}</Text>
      {props.ImageSource?<Image style={styles.imageStyle} source={props.ImageSource}/>:null}
    </TouchableOpacity>
  );
};

const styles =StyleSheet.create({
  buttonText:{
    fontSize:fontSize.font_14,
    fontFamily:fontFamily.fontFamilyBold,
    color:colorStyle.whiteText,
    padding:9,
  },
  imageStyle:{
    height: 15,
    width: 15,
    padding:9,
  },
  buttonBox: {
    width: '100%', 
    justifyContent:'center',
    alignItems: 'center',
    height: 48,
    flexDirection: 'row',
    backgroundColor: colorStyle.blackBackground,
  }
})

export default Button;