/**
 * 
 * Login Screen component to save users firstName and lastName  
 * @author Purnima Lamba
 * 
 */

import React from 'react';
import {AsyncStorage,View,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Login} from '../../Assets/Localization/Localization'
import CustomImage from '../CommonComponents/CustomImage';
import CustomTextInput from '../CommonComponents/CustomTextInput';
import Button from '../CommonComponents/CustomButton';
import CustomText from '../CommonComponents/CustomText';
import getImages from '../../Assets/Constants/ImageConstants';
import styles from './LoginScreenStyle'
import { inject,observer } from 'mobx-react';
import { colorStyle } from '../../Assets/Styles/styleConstant';
const Images = getImages()


@inject('LoginStore')
@observer
export default class LoginComponent extends React.Component {

  constructor(props){
    super(props)
    this.state={
      fistNameFocus:false,
      lastNameFocus:false,
      termsAndCondition:true
    }
  }
  
  onFocus(firstName,lastName){
    if(firstName){
      this.setState({fistNameFocus:true})
    }
    else if(lastName){
      this.setState({lastNameFocus:true})
    }
  }

  termsAndCondition(){
    this.setState((prevState) => ({termsAndCondition:!prevState.termsAndCondition}))
  }

  render() {
    return (
      <SafeAreaView style={styles.mainView}>
        <KeyboardAvoidingView style={styles.contentView}>
         <View style={styles.inputView}>

         <CustomText 
           textStyle={styles.headerText}
           textAlign='left' 
           textColor={colorStyle.blackText} 
           text={Login.call} />

         <CustomText 
           textStyle={this.state.fistNameFocus?styles.focusedLabel:styles.label}
           textAlign='left' 
           textColor={colorStyle.greyText} 
           text={Login.firstName} />

          <CustomTextInput 
          underlineColorAndroid={colorStyle.line} 
          value={this.props.LoginStore.firstName} 
          onFocus={() => this.onFocus(true,false)}
          returnKeyType="next"
          onSubmitEditing={() => {
            this.lastName.getInnerRef().focus()
          }}
          onChangeText={(text) =>this.props.LoginStore.changeFirstName(text)} />

          <CustomText 
           textStyle={styles.errorText}
           textAlign='left' 
           textColor={colorStyle.red} 
           text={this.props.LoginStore.firstNameMessage} />

           <View style={{marginTop:10}}>
           <CustomText 
           textStyle={this.state.lastNameFocus?styles.focusedLabel:styles.label}
           textAlign='left' 
           textColor={colorStyle.greyText} 
           text={Login.lastName} />

          <CustomTextInput 
          underlineColorAndroid={colorStyle.line} 
          onFocus={() => this.onFocus(false,true)}
          value={this.props.LoginStore.lastName} 
          returnKeyType="done"
          ref={(ref) => this.lastName = ref}
          onSubmitEditing={() => {
            this.props.LoginStore.UserLogin(this.props.navigation)
          }}
          onChangeText={(text) =>this.props.LoginStore.changeLastName(text)} />

          <CustomText 
           textStyle={styles.errorText} 
           textAlign='left'
           textColor={colorStyle.red} 
           text={this.props.LoginStore.lastNameMessage} />
           </View>

           <View style={{flexDirection:'row',marginTop:40,alignItems: 'center',marginBottom: 20}}>
           <TouchableOpacity onPress={()=>this.termsAndCondition()} activeOpacity={0.9}>
           {
              this.state.termsAndCondition?
               <CustomImage style={{height: 20,width: 20}} source={Images.SelectedCheckbox} />:
               <View style={styles.unselected} />
            }
           </TouchableOpacity>
             <View style={{paddingLeft:12}}>
             <View style={{flexDirection:'row'}}>
               <CustomText textStyle={styles.termsStyle}
                 textAlign='center' 
                 textColor={colorStyle.greyText} 
                 text={Login.proceeding} />
               <CustomText textStyle={styles.termsStyleUnderline}
                textAlign='center' 
                textColor={colorStyle.greyText} 
                text={Login.termsAndCondition} />
             </View>
             <View style={{flexDirection:'row'}}>
               <CustomText textStyle={styles.termsStyleUnderline}
                 textAlign='center' 
                 textColor={colorStyle.greyText} 
                 text={Login.termsOfUse} />
               <CustomText textStyle={styles.termsStyle}
                textAlign='center' 
                textColor={colorStyle.greyText} 
                text={Login.and} />
                <CustomText textStyle={styles.termsStyleUnderline}
                textAlign='center' 
                textColor={colorStyle.greyText} 
                text={Login.policy} />
             </View>
             </View>
           </View>
         </View>
         <Button buttonText={Login.continue} ImageSource={Images.WhiteArrow} onPress={() => {this.props.LoginStore.UserLogin(this.props.navigation)}} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}