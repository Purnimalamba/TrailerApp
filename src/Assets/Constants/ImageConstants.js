
/**** Common file which contains path of the all the images used depending upon the pixelRation
 * @author Purnima Lamba
 **/

 import getImageType from '../../Utility/CommonFunction'
 import AppConstants from './AppConstants';

 const ImageType = getImageType()
 var Images = {}
 export default function getImages(){
   switch(ImageType){
     case AppConstants.ImageConstants.hdpi : {
     Images = {
        BackIcon:require(`../Images/hdpi/BackIcon.png`),
        Play:require(`../Images/hdpi/Play.png`),
        SelectedCheckbox:require(`../Images/hdpi/SelectedCheckbox.png`),
        crossIcon:require(`../Images/hdpi/crossIcon.png`),
        SplashIcon:require('../Images/hdpi/SplashIcon.png'),
        Tangled:require(`../Images/hdpi/Tangled.png`),
        Teasure1:require(`../Images/hdpi/Teasure1.png`),
        WhiteArrow:require(`../Images/hdpi/WhiteArrow.png`),
       }
       return Images
     }
     break;
     case AppConstants.ImageConstants.mdpi : {
      Images = {
         BackIcon:require(`../Images/mdpi/BackIcon.png`),
         Play:require(`../Images/mdpi/Play.png`),
         SelectedCheckbox:require(`../Images/mdpi/SelectedCheckbox.png`),
         crossIcon:require(`../Images/hdpi/crossIcon.png`),
         SplashIcon:require('../Images/mdpi/SplashIcon.png'),
         Tangled:require(`../Images/mdpi/Tangled.png`),
         Teasure1:require(`../Images/mdpi/Teasure1.png`),
         WhiteArrow:require(`../Images/mdpi/WhiteArrow.png`),
        }
        return Images
      }
      break;
      case AppConstants.ImageConstants.xhdpi : {
        Images = {
           BackIcon:require(`../Images/xhdpi/BackIcon.png`),
           Play:require(`../Images/xhdpi/Play.png`),
           SelectedCheckbox:require(`../Images/xhdpi/SelectedCheckbox.png`),
           crossIcon:require(`../Images/hdpi/crossIcon.png`),
           SplashIcon:require('../Images/xhdpi/SplashIcon.png'),
           Tangled:require(`../Images/xhdpi/Tangled.png`),
           Teasure1:require(`../Images/xhdpi/Teasure1.png`),
           WhiteArrow:require(`../Images/xhdpi/WhiteArrow.png`),
          }
          return Images
        }
        break;
        case AppConstants.ImageConstants.xxhdpi : {
          Images = {
             BackIcon:require(`../Images/xxhdpi/BackIcon.png`),
             Play:require(`../Images/xxhdpi/Play.png`),
             SelectedCheckbox:require(`../Images/xxhdpi/SelectedCheckbox.png`),
             crossIcon:require(`../Images/hdpi/crossIcon.png`),
             SplashIcon:require('../Images/xxhdpi/SplashIcon.png'),
             Tangled:require(`../Images/xxhdpi/Tangled.png`),
             Teasure1:require(`../Images/xxhdpi/Teasure1.png`),
             WhiteArrow:require(`../Images/xxhdpi/WhiteArrow.png`),
            }
            return Images
          }
          break;
          case AppConstants.ImageConstants.xxxhdpi : {
            Images = {
               BackIcon:require(`../Images/xxxhdpi/BackIcon.png`),
               Play:require(`../Images/xxxhdpi/Play.png`),
               SelectedCheckbox:require(`../Images/xxxhdpi/SelectedCheckbox.png`),
               crossIcon:require(`../Images/hdpi/crossIcon.png`),
               SplashIcon:require('../Images/xxxhdpi/SplashIcon.png'),
               Tangled:require(`../Images/xxxhdpi/Tangled.png`),
               Teasure1:require(`../Images/xxxhdpi/Teasure1.png`),
               WhiteArrow:require(`../Images/xxxhdpi/WhiteArrow.png`),
              }
             return Images
            }
            break;
   }
 }



