
/**** Store for Edit Detail Component where firstname or lastname can be changed
 * @author Purnima Lamba
 **/

import {observable , action} from 'mobx';
import {AsyncStorage,DeviceEventEmitter} from 'react-native';
import AppConstants from '../Assets/Constants/AppConstants'
import Regex from '../Assets/Constants/Regex'

class EditDetailStore{

    @observable firstName = null
    @observable firstNamePresent = false
    @observable firstNameValid = false
    @observable firstNameMessage = null

     //Function to change first name or last name in asyncStorage
    @action async UserLogin(key,navigation){
      if(this.firstName){
        this.changePresentFlag('true')
        var firstNameFlag = Regex.name.test(this.firstName)
        if(firstNameFlag){
          this.changeValidFlag('true')
          await AsyncStorage.setItem(key,this.firstName)
          DeviceEventEmitter.emit('updateInfo', true)
          this.firstName = null
          navigation.goBack()
        }
        else if(!firstNameFlag){
          this.changeValidFlag('firstName')
        }
      }
      else if(!this.firstName){
        this.changePresentFlag('firstName')
      }
    }

    //Function to check the presence for first name or last name
    @action changePresentFlag(type){
      switch(type){
        case 'firstName':{
          this.firstNamePresent = false
          this.firstNameMessage = AppConstants.messageConstants.enterFirstName
        }
          break;
        case 'true' :{
          this.firstNamePresent = true
          this.firstNameMessage = null
        }
      }
    }

    //Function to store value of fisrt name
    @action changeFirstName(text){
      this.firstName = text
    }


    //Function to check the validation for first name or last name
    @action changeValidFlag(type){
      switch(type){
        case 'firstName':{
          this.firstNameValid = false
          this.firstNameMessage = AppConstants.messageConstants.firstNameMessage
        }
          break;
        case 'true' :{
          this.firstNameValid = true
          this.firstNameMessage = null
        }
      }
    }
}

export default new EditDetailStore();