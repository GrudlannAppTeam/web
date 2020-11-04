import React from 'react';

const VideoBackground = () => {
    return (
        <video className='video' autoPlay loop muted poster='home.png' >
            <source src="video.mp4" type="video/mp4" />
        </video>
    );
};

export default VideoBackground;