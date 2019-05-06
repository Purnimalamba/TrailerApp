
/**** Contains common TextInput component 
 * @author Purnima Lamba
 **/

/**
 * Common TextInput file to implement TextInput feild in application 
 * 
 * Parameters those you can pass in this compoenent 
 * 
 * style : Style of button box else it will take default one
 * os : os that will be android for false and ios for true
 * lineWidth : width of view line. Only necessory when you are passing style in props 
 * 
 * @author Purnima Lamba
 */

import React, { Component } from 'react'
import { TextInput,StyleSheet,View} from 'react-native'
import { colorStyle,fontSize } from '../../Assets/Styles/styleConstant'

class CustomTextInput extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    var lineWidth=this.props.lineWidth?this.props.lineWidth:'100%';

    return (
      <View>
        <TextInput
          {...this.props}
          underlineColorAndroid={this.props.underlineColorAndroid ? this.props.underlineColorAndroid : colorStyle.textboxUnderLine}
          returnKeyType={this.props.returnKeyType}
          multiline={this.props.multiline}
          onFocus={this.props.onFocus}
          secureTextEntry={this.props.secureTextEntry}
          caretHidden={this.props.caretHidden}
          placeholder={this.props.placeholder}
          ref={(ref) => this.ref = ref}
          placeholderTextColor={colorStyle.lightGrayTextHint}
          style={this.props.style?this.props.style:(this.props.os ? styles.TextboxIOS : styles.TextboxAndroid)}
          value={this.props.value}
          maxLength={this.props.maxLength}
          keyboardType={this.props.keyboardType}
          onChangeText={this.props.onChangeText}
          onSubmitEditing={this.props.onSubmitEditing}
          editable={this.props.editable}
        />
        {this.props.os?(<View style={{height:1, width:lineWidth, backgroundColor: colorStyle.textboxUnderLine}} />):(<View />)}
      </View>
    )
  
  }
  getInnerRef = () => this.ref;
}

const styles =StyleSheet.create({
  TextboxeAndroid: {
    fontSize: fontSize.font_14,
    color: colorStyle.greyText,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextboxIOS: {
    height:fontSize.font_12*2.5,
    fontSize: fontSize.font_14,
    color: colorStyle.greyText,
    borderLeftColor: colorStyle.whiteText
  }
})

export default CustomTextInput
