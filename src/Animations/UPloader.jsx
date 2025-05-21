import Lottie from "lottie-react";
import developerAnimation from "../assets/UPLoader.json"; 
import React from 'react'

const UPloader = () => {
  return (
      <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={developerAnimation} loop={true} />
    </div>
  )
}

export default UPloader