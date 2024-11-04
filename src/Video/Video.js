import React from 'react';
import useIsMobile from '../isUseMobile/isUseMobile';

const Video = () => {
    const isMobile = useIsMobile();
    const videoSrc = isMobile
        ? 'Css/Res-MyFinder.mp4'
        : '/Css/Background MyFinder 1-2.mp4'
    return (
        <div className="video-container">
            <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="responsive-video"
            />
        </div>
    );
};

export default Video;
