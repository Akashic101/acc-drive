import { notifications } from "@mantine/notifications";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { ImageHero } from "../ImageHero/ImageHero";

import { VideoHero } from "../VideoHero/VideoHero";

export function HeroTitle() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    notifications.show({
      id: "websiteStatus",
      title: "This website is in beta",
      message: "Current version: 0.2.4. Last updated on 25.11.2023 at 16:30",
      color: "red",
      icon: <IconAlertTriangle size={"1rem"} />,
    });
  }, []);

  return <div id="home">{isDesktop ? <VideoHero /> : <ImageHero />}</div>;
}
