import { useState, useRef, useEffect } from "react";
import playButton from "../images/play-button.svg"
import gsap from "gsap";

const Video = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      gsap.to(".video-wrapper", {
        rotate: 0,
        duration: .5
      })
    } else if (!isPlaying) {
      videoRef.current.pause();
      gsap.to(".video-wrapper", {
        rotate: -10,
        duration: 0.5,
      });
    }
  }, [isPlaying]);
  return (
    <>
      <div className="video-holder">
        <div className="video-wrapper">
          <video
            src={video}
            loop
            muted
            ref={videoRef}
            onClick={handleClick}
          ></video>
          {!isPlaying && <img className="play-button" src={playButton} alt="play-button" onClick={handleClick} /> }
        </div>
      </div>
    </>
  );
};

export default Video;
