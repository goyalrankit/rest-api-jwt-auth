import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../Animation/reset-password.json';

class AnimationAdminLogin extends Component {
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return(
      <div>
        <Lottie options={defaultOptions}
              height={200}
              width={100}
        />
      </div>
    )
  }
}

export default AnimationAdminLogin;
 