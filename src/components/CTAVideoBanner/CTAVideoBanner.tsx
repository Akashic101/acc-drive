import {
  Container,
  Grid,
  Title,
  Text,
  Space,
  Center,
  Stack,
  SimpleGrid,
} from "@mantine/core";
import classes from "./CTAVideoBanner.module.css";
import { Trans, useTranslation } from "react-i18next";
import YouTube, { YouTubeProps } from "react-youtube";

export function CTAVideoBanner() {
  const { t } = useTranslation("translations");

  const opts: YouTubeProps["opts"] = {
    height: window.innerWidth >= 600 ? "360" : "360",
    width: window.innerWidth >= 600 ? "640" : "100%",
  };

  return (
    <Center>
      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        <Container className={classes.wrapper}>
          <Title className={classes.title}>
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "green", to: "#85d46c" }}
            >
              <Trans i18nKey="cta.video.title" />
            </Text>{" "}
            <br></br>
          </Title>
          <Text size="xl" fw={500}>
            <Trans i18nKey="cta.video.subtitle" />
          </Text>
        </Container>
        <Center>
          <YouTube
            className="youtubePlayer"
            opts={opts}
            videoId={"dQw4w9WgXcQ"}
          />
        </Center>
      </SimpleGrid>

      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </Center>
  );
}
