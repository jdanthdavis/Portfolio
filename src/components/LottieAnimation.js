import React from 'react'
import Lottie from 'react-lottie'
import robot from './robot.json'

const defaultOptions = {
    loop: true,
    autiplay: true,
    animationData: robot,
    rendererSettings: {
        preserveAspectRatio: "xMidyMid slice"
    }
};

const LottieAnimation = () => {
    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    );
}

export default LottieAnimation