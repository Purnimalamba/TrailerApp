
/**** file which contains All the common functions used in the app
 * @author Purnima Lamba
 **/

import {PixelRatio} from 'react-native'
import AppConstants from '../Assets/Constants/AppConstants'

//This function returns which type of image should be selected according to device's pixelratio

export default function getImageType(){
  var pixelRatio = PixelRatio.get()
  var imageType = null
  switch(pixelRatio){
   case 1 : {
     imageType = AppConstants.ImageConstants.hdpi
   }
   break;
   case 1.5 : {
    imageType = AppConstants.ImageConstants.mdpi
  }
  break;
  case 2 : {
    imageType = AppConstants.ImageConstants.xhdpi
  }
  break;
  case 3 : {
    imageType = AppConstants.ImageConstants.xxhdpi
  }
  break;
  case 3.5 : {
    imageType = AppConstants.ImageConstants.xxxhdpi
  }
  break;
  default : {
    imageType = AppConstants.ImageConstants.hdpi
  }
  return imageType
  }
}