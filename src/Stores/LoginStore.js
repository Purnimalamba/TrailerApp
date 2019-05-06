
/**** Store for login Component where all  variables are declared and manipulated
 * @author Purnima Lamba
 **/

import {observable , action} from 'mobx';
import {AsyncStorage} from 'react-native';
import AppConstants from '../Assets/Constants/AppConstants'
import Regex from '../Assets/Constants/Regex'
class LoginStore{

    @observable firstName = null
    @observable lastName = null
    @observable firstNamePresent = false
    @observable firstNameValid = false
    @observable lastNamePresent = false
    @observable lastNameValid = false
    @observable lastNameMessage = null
    @observable firstNameMessage = null

     //Function to set  first name and last name in asyncStorage
    @action async UserLogin(navigation){
      if(this.firstName && this.lastName){
        this.changePresentFlag('true')
        var firstNameFlag = Regex.name.test(this.firstName)
        var lastNameFlag = Regex.name.test(this.lastName)
        if(firstNameFlag && lastNameFlag){
          this.changeValidFlag('true')
          await AsyncStorage.multiSet([['firstName',(this.firstName)],['lastName',(this.lastName)],['onceVisited','true']])
          navigation.navigate('Dashboard')
        }
        else if(!firstNameFlag && !lastNameFlag){
          this.changeValidFlag('both')
        }
        else if(!firstNameFlag){
          this.changeValidFlag('firstName')
        }
        else {
          this.changeValidFlag('lastName')
        }
      }
      else if(!this.firstName && !this.lastName){
        this.changePresentFlag('both')
      }
      else if(!this.firstName){
        this.changePresentFlag('firstName')
      }
      else {
        this.changePresentFlag('lastName')
      }
    }

    //Function to check the presence for first name and last name
    @action changePresentFlag(type){
      switch(type){
        case 'both':{
          this.firstNamePresent = false
          this.lastNamePresent = false
          this.firstNameMessage = AppConstants.messageConstants.enterFirstName
          this.lastNameMessage = AppConstants.messageConstants.enterLastName
        }
          break;
        case 'firstName':{
          this.firstNamePresent = false
          this.lastNamePresent = true
          this.lastNameMessage = null
          this.firstNameMessage = AppConstants.messageConstants.enterFirstName
        }
          break;
        case 'lastName' :{
          this.firstNamePresent = true
          this.lastNamePresent = false
          this.firstNameMessage = null
          this.lastNameMessage = AppConstants.messageConstants.enterLastName
        }
          break;
        case 'true' :{
          this.firstNamePresent = true
          this.lastNamePresent = true
          this.firstNameMessage = null
          this.lastNameMessage = null
        }
      }
    }

    //Function to store value of fisrt name
    @action changeFirstName(text){
      this.firstName = text
    }

    //Function to store value of last name
    @action changeLastName(text){
      this.lastName = text
    }

    //Function to check the validation for first name and last name
    @action changeValidFlag(type){
      switch(type){
        case 'both':{
          this.firstNameValid = false
          this.lastNameValid = false
          this.firstNameMessage = AppConstants.messageConstants.firstNameMessage
          this.lastNameMessage = AppConstants.messageConstants.lastNameMessage
        }
          break;
        case 'firstName':{
          this.firstNameValid = false
          this.lastNameValid = true
          this.lastNameMessage=null
          this.firstNameMessage = AppConstants.messageConstants.firstNameMessage
        }
          break;
        case 'lastName' :{
          this.firstNameValid = true
          this.lastNameValid = false
          this.firstNameMessage = null
          this.lastNameMessage = AppConstants.messageConstants.lastNameMessage
        }
          break;
        case 'true' :{
          this.firstNameValid = true
          this.lastNameValid = true
          this.firstNameMessage = null
          this.lastNameMessage = null
        }
      }
    }
}

export default new LoginStore();