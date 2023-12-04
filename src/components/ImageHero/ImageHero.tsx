import classes from "./ImageHero.module.css";
import { HeroContent } from "../HeroContent/HeroContent";

export function ImageHero() {
  return (
    <div className={classes.root} id="home">
      <HeroContent />
    </div>
  );
}
