import { useState, useRef } from "react";

const Video = ({ video }) => {
  const [isPaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleClick = () => {
    if (!isPaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPaying);
  };
  return (
    <>
      <div className="video-holder">
        <video
          src={video}
          loop
          muted
          ref={videoRef}
          onClick={handleClick}
        ></video>
      </div>
    </>
  );
};

export default Video;
