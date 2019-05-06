/**
 * 
 * Edit Details component to edit users firstName and lastName  
 * @author Purnima Lamba
 * 
 */

import React from 'react';
import {AsyncStorage,View,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Login} from '../../../Assets/Localization/Localization'
import CustomImage from '../../CommonComponents/CustomImage';
import CustomTextInput from '../../CommonComponents/CustomTextInput';
import Button from '../../CommonComponents/CustomButton';
import CustomText from '../../CommonComponents/CustomText';
import getImages from '../../../Assets/Constants/ImageConstants';
import styles from './EditDetailsStyle'
import { inject,observer } from 'mobx-react';
import { colorStyle } from '../../../Assets/Styles/styleConstant';
const Images = getImages()


@inject('EditDetailStore')
@observer
export default class EditDetailsComponent extends React.Component {

  constructor(props){
    super(props)
    this.state={
      fistNameFocus:false,
      key:null,
      label:null
    }
  }
  componentDidMount(){

   this.setState({
     key:this.props.navigation.state.params.key,
     label:this.props.navigation.state.params.label
   })
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
         <TouchableOpacity style={{padding:0}} activeOpacity={0.8} onPress={()=> this.props.navigation.goBack()}>
         <CustomImage resizeMode='contain' style={{height: 16,width:16}} source={Images.crossIcon} />
         </TouchableOpacity>
         <CustomText 
           textStyle={styles.headerText}
           textAlign='left' 
           textColor={colorStyle.blackText} 
           text={Login.upDate} />

         <CustomText 
           textStyle={this.state.fistNameFocus?styles.focusedLabel:styles.label}
           textAlign='left' 
           textColor={colorStyle.greyText} 
           text={this.state.label} />

          <CustomTextInput 
          underlineColorAndroid={colorStyle.line} 
          value={this.props.EditDetailStore.firstName} 
          onFocus={() => this.onFocus(true,false)}
          returnKeyType="done"
          onSubmitEditing={() => {
            this.props.EditDetailStore.UserLogin(this.state.key,this.props.navigation)
          }}
          onChangeText={(text) =>this.props.EditDetailStore.changeFirstName(text)} />

          <CustomText 
           textStyle={styles.errorText}
           textAlign='left' 
           textColor={colorStyle.red} 
           text={this.props.EditDetailStore.firstNameMessage} />

         </View>

         <Button buttonText={Login.save}  onPress={() => {this.props.EditDetailStore.UserLogin(this.state.key,this.props.navigation)}} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}