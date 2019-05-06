
/**** Contains common Text component 
 * 
 *  Parameters those you can pass in this compoenent 
 * 
 * textStyle : Style of text else it will take default one 
 * textAlign : Alignment of the text to be displayed
 * textColor : Color of the text to be displayed
 * text : Text to be displayed
 * @author Purnima Lamba
 **/

import React from 'react';
import {Text ,StyleSheet} from 'react-native';
import { colorStyle,fontSize,fontFamily,fontWeight } from '../../Assets/Styles/styleConstant';

const CustomText = (props) => {
  return (
        <Text style={[props.textStyle?props.textStyle:styles.textStyle,
          // {textAlign:props.textAlign?props.textAlign:'center'},
          {color:props.textColor?props.textColor:colorStyle.whiteText}
        ]}
        >
          {props.text}
        </Text>
  )
};

const styles =StyleSheet.create({
  textStyle:{
    fontSize:fontSize.font_14,
    fontFamily:fontFamily.fontFamilyNormal,
  },
  
})

export default CustomText;