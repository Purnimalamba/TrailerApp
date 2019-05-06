/**
 * 
 * Dashboard Screen component 
 * @author Purnima Lamba
 * 
 */

import React from 'react';
import {View,TouchableOpacity,RefreshControl,FlatList,Image,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Login} from '../../../Assets/Localization/Localization'
import LinearGradient from 'react-native-linear-gradient';
import CustomImage from '../../CommonComponents/CustomImage';
import CustomTextInput from '../../CommonComponents/CustomTextInput';
import Button from '../../CommonComponents/CustomButton';
import CustomText from '../../CommonComponents/CustomText';
import getImages from '../../../Assets/Constants/ImageConstants';
import styles from './DashboardHomeStyle'
import { inject,observer } from 'mobx-react';
import { colorStyle } from '../../../Assets/Styles/styleConstant';
import movieData from '../../../Utility/MovieData';
const Images = getImages()


@inject('LoginStore')
@observer
export default class DashboardHomeComponent extends React.Component {

  constructor(props){
    super(props)
    this.state={
      isRefreshing:false
    }
  }
  onRefresh(){
    setTimeout(() => {
      this.setState({isRefreshing:false})
    }, 500);
  }
  

  render() {
    const MovieData = movieData
    const TeasureList = MovieData.Teasures.length?MovieData.Teasures.map((item,index) => 
   { return(
        <View>
               <CustomText 
                textStyle={[styles.teasure]}
                textAlign='center' 
                textColor={colorStyle.greyText} 
                text={Login.Teasure + index} />
             <CustomImage   style={{width: '100%', height: 120}} source={Images.Teasure1} />

             <View style={styles.infoView}>
             <View>
              <CustomText 
                textStyle={[styles.teasureName]}
                textAlign='center' 
                textColor={colorStyle.blackBackground} 
                text={MovieData.name + ' - ' + item.name} />
                <View style={{flexDirection:'row'}}>
                 <CustomText 
                textStyle={[styles.postedBy]}
                textAlign='center' 
                textColor={colorStyle.greyText} 
                text={item.postedBy + ' . '} />
                 <CustomText 
                textStyle={[styles.postedBy]}
                textAlign='center' 
                textColor={colorStyle.greyText} 
                text={item.views + ' Views . '} />
                 <CustomText 
                textStyle={[styles.postedBy]}
                textAlign='center' 
                textColor={colorStyle.greyText} 
                text={item.old + ' years ago'} />
                </View>
                </View>
             <View>
             </View>
              <CustomImage resizeMode='contain'  style={styles.playImage} source={Images.Play} />
             </View>
              </View>

    )}):null
    return (
      <ScrollView style={{flex: 1,backgroundColor:colorStyle.whiteText}} showsVerticalScrollIndicator={false}
       refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh()}
            />
          }
      >
        <CustomImage resizeMode='cover'  style={{width: '100%', height: '25%'}} source={Images.Tangled} />
        <CustomText 
         textStyle={[styles.pullText]}
         textAlign='center' 
         textColor={colorStyle.whiteText} 
         text={Login.pull} />
        <LinearGradient 
        style={{alignSelf:'center',height:'10%',width:'100%',opacity:1,position:'absolute',top:185}}
        colors={['transparent','black']}>
         <CustomText 
           textStyle={styles.nameText}
           textAlign='center' 
           textColor={colorStyle.whiteText} 
           text={(MovieData.name)} />
           <View style={styles.textView}>
          <CustomText 
           textStyle={styles.duration}
           textAlign='center' 
           textColor={colorStyle.durationText} 
           text={(MovieData.releaseYear) + '   .'} />
             <CustomText 
           textStyle={[styles.duration,{paddingLeft:10}]}
           textAlign='center' 
           textColor={colorStyle.durationText} 
           text={MovieData.NumberOfTeasures + '+   .'} />
             <CustomText 
           textStyle={[styles.duration,{paddingLeft:10}]}
           textAlign='center' 
           textColor={colorStyle.durationText} 
           text={MovieData.Duration} />
           </View>

           <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('ViewDetails')} style={styles.playView}>
            <CustomImage resizeMode='contain'  style={{width: 16, height: 16}} source={Images.Play} />
            <CustomText 
           textStyle={[styles.duration,{paddingLeft:10}]}
           textAlign='center' 
           textColor={colorStyle.blackBackground} 
           text={Login.watch} />
           </TouchableOpacity>
        </LinearGradient>
        <View  style={{flex: 1,backgroundColor:colorStyle.blackBackground,marginBottom:300}}>
         {TeasureList}
        </View>
      </ScrollView>
    );
  }
}