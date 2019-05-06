/**
 * 
 * View details component to view users firstName and lastName  
 * @author Purnima Lamba
 * 
 */

import React from 'react';
import {AsyncStorage,View,KeyboardAvoidingView,TouchableOpacity,DeviceEventEmitter} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Login} from '../../../Assets/Localization/Localization'
import CustomImage from '../../CommonComponents/CustomImage';
import CustomTextInput from '../../CommonComponents/CustomTextInput';
import Button from '../../CommonComponents/CustomButton';
import CustomText from '../../CommonComponents/CustomText';
import getImages from '../../../Assets/Constants/ImageConstants';
import styles from './ViewDetailsStyle'
import { inject,observer } from 'mobx-react';
import { colorStyle, fontSize, fontFamily } from '../../../Assets/Styles/styleConstant';
const Images = getImages()


@inject('LoginStore')
@observer
export default class ViewDetailsComponent extends React.Component {

  constructor(props){
    super(props)
    this.state={
      fistNameFocus:false,
      lastNameFocus:false,
      termsAndCondition:true,
      firstName:null,
      lastName:null
    }
  }

  static navigationOptions = {
    title: Login.details,
    headerTitleStyle: { textAlign: 'center',width: '90%',alignSelf: 'center',color: colorStyle.darkGreyText,fontSize:fontSize.font_16,fontFamily:fontFamily.fontFamilyBold },
    headerRight: (<View />)
  };

   componentDidMount(){
    DeviceEventEmitter.addListener('updateInfo', () => {
      this.getData()
    })
    this.getData()
  }        
  
  async getData(){
    await AsyncStorage.multiGet(['firstName','lastName']).then((data) => {
      if(data && data.length){
       var firstNameSplit = data[0].toString().split(',')
       var lastNameSplit = data[1].toString().split(',')
       var firstName = firstNameSplit[1]
       var lastName = lastNameSplit[1]
       this.setState({firstName,lastName})
      }
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

  logout(){
    this.props.navigation.navigate('Dashboard')
  }

  termsAndCondition(){
    this.setState((prevState) => ({termsAndCondition:!prevState.termsAndCondition}))
  }

  render() {
    return (
      <SafeAreaView style={styles.mainView}>
         <View>
           <View style={styles.cardView}>
           <View>
           <CustomText 
           textStyle={styles.labelText}
           textAlign='left' 
           textColor={colorStyle.greyText} 
           text={Login.firstName} />
            <CustomText 
           textStyle={styles.infoText}
           textAlign='left' 
           textColor={colorStyle.blackText} 
           text={this.state.firstName} />
           </View>
           <TouchableOpacity style={{alignSelf:'flex-end'}} activeOpacity={0.8} 
            onPress={() => this.props.navigation.navigate('EditDetails',{key:'firstName',label:Login.firstName})}>
           <CustomText 
           textStyle={styles.editText}
           textAlign='left' 
           textColor={colorStyle.greyText} 
           text={Login.edit} />
           </TouchableOpacity>
          
           </View>
           <View style={styles.cardView}>
           <View>
           <CustomText 
           textStyle={styles.labelText}
           textAlign='left' 
           textColor={colorStyle.greyText} 
           text={Login.lastName} />
            <CustomText 
           textStyle={styles.infoText}
           textAlign='left' 
           textColor={colorStyle.blackText} 
           text={this.state.lastName} />
           </View>
           <TouchableOpacity style={{alignSelf:'flex-end'}} activeOpacity={0.8} 
            onPress={() => this.props.navigation.navigate('EditDetails',{key:'lastName',label:Login.lastName})}>
           <CustomText 
           textStyle={styles.editText}
           textAlign='left' 
           textColor={colorStyle.greyText} 
           text={Login.edit} />
           </TouchableOpacity>
           </View>

           <TouchableOpacity style={{alignSelf:'center',paddingTop: 50}} onPress={()=>this.logout()} activeOpacity={0.9}>
           <CustomText
                 textAlign='center' 
                 textColor={colorStyle.red} 
                 text='Logout' />
           </TouchableOpacity>
         </View>
         <View style={styles.demoView}>
         <CustomText
                 textStyle={styles.versionText}
                 textAlign='center' 
                 textColor={colorStyle.greyText} 
                 text={Login.demo}/>
         <CustomText
                 textStyle={styles.versionText}
                 textAlign='center' 
                 textColor={colorStyle.greyText} 
                 text={Login.version}/>
         </View>
        
      </SafeAreaView>
    );
  }
}