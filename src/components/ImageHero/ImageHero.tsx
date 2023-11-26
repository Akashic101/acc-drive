import { useTranslation } from "react-i18next";
import classes from "./ImageHero.module.css";
import { HeroContent } from "../HeroContent/HeroContent";

export function ImageHero() {
  const { t } = useTranslation("translations");
  return (
    <div className={classes.root} id="home">
      <HeroContent />
    </div>
  );
}
