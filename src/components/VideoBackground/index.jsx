import React from 'react';

const VideoBackground = () => {
    return (
        <video className='video' autoPlay loop muted poster='home.jpg' >
            <source src="video.webm" type="video/webm" />
        </video>
    );
};

export default VideoBackground;