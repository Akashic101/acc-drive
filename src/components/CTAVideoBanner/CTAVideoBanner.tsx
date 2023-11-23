import {
  Container,
  Grid,
  Title,
  Text,
  Space,
  Center,
  Stack,
} from "@mantine/core";
import classes from "./CTAVideoBanner.module.css";
import { Trans, useTranslation } from "react-i18next";
import YouTube from "react-youtube";

export function CTAVideoBanner() {
  const { t } = useTranslation("translations");

  return (
    <Container size="responsive">
      <Grid justify="space-between">
        <Grid.Col className={classes.alignedCenter} span={6}>
          <Stack align="center">
            <Center>
              <Container>
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
            </Center>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <YouTube videoId={"dQw4w9WgXcQ"} />
          </Center>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
}
