
/**** Contains common Image component 
 * 
 *  Parameters those you can pass in this compoenent 
 * 
 * All the props Which can be passed to Image Component
 * defaultImage: image path of dafault image on error 
 * @author Purnima Lamba
 **/

import React, { Component } from 'react'
import {Image} from 'react-native';
import Images from '../../Assets/Constants/ImageConstants'

class CustomImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFailed:false
    }
  }

  render(){
    return (
      this.state.isFailed? 
        <Image {...this.props}  source={this.props.defaultImage?this.props.defaultImage:Images.defaultImage} />
        :
        <Image {...this.props} onError={()=>this.setState({isFailed:true})} />
    );
  }
}
export default CustomImage;