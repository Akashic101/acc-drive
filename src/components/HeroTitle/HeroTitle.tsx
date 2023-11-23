import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Flex,
  ThemeIcon,
  CheckIcon,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconAlertTriangle,
  IconBrandDiscord,
  IconCpu,
  IconRouteSquare,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import classes from "./HeroTitle.module.css";
import ReactPlayer from "react-player";
import backgroundVideo from "../../media/preview3D.mp4";
import { VideoHero } from "../VideoHero/VideoHero";

export function HeroTitle() {
  useEffect(() => {
    notifications.show({
      id: "websiteStatus",
      title: "This website is in beta",
      message: "Current version: 0.2.3. Last updated on 24.11.2023 at 00:00",
      color: "red",
      icon: <IconAlertTriangle size={"1rem"} />,
    });
  }, []);

  const { t } = useTranslation("translations");
  return (
    <div>
      <VideoHero />
    </div>
  );
}
