import classes from "./VideoHero.module.css";
import ReactPlayer from "react-player";
import backgroundVideo from "../../media/preview3D.mp4";
import { HeroContent } from "../HeroContent/HeroContent";

export function VideoHero() {
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
