import classes from "./VideoHero.module.css";
import ReactPlayer from "react-player";
import backgroundVideo from "../../media/preview3D.mp4";
import { HeroContent } from "../HeroContent/HeroContent";
import { useEffect, useRef, useState } from "react";

export function VideoHero() {
  const [calcWidth, setCalcWidth] = useState(0);
  const [calcHeight, setCalcHeight] = useState(0);

  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = videoContainerRef.current?.clientWidth || 0;
      const containerHeight = videoContainerRef.current?.clientHeight || 0;
      const aspectRatio = 16 / 9;

      if (containerWidth < containerHeight * aspectRatio) {
        setCalcWidth(containerHeight * aspectRatio);
        setCalcHeight(containerHeight);
      } else {
        setCalcWidth(containerWidth);
        setCalcHeight(containerWidth / aspectRatio);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.videoContainer}>
      <ReactPlayer
        className={classes.videoPlayer}
        width={"100%"}
        height={"100%"}
        url={backgroundVideo}
        playing={true}
        loop={true}
        muted={true}
        config={{
          file: {
            attributes: {
              style: { width: "100%", height: "100%", objectFit: "cover" },
            },
          },
        }}
      />
      <div className={classes.content}></div>
      <HeroContent />
    </div>
  );
}
