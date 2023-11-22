import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Space,
  Image,
  AspectRatio,
  Center,
  Stack,
} from "@mantine/core";
import classes from "./CTABanner.module.css";
import collage from "../media/drive-collage.png";
import { Trans, useTranslation } from "react-i18next";

export function CTABanner() {
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
                    <Trans i18nKey="cta.title" />
                  </Text>{" "}
                  <br></br>
                </Title>
                <Text size="xl" fw={500}>
                  <Trans i18nKey="cta.costs" />
                </Text>
                <Text size="sm">
                  <Trans i18nKey="cta.changeLinkedAccount_1" />
                </Text>
                <Text size="sm">
                  <Trans i18nKey="cta.changeLinkedAccount_2" />
                </Text>
                <Space h={"lg"} />
                <Button color={"#ffc438"} fullWidth>
                  <Trans i18nKey="cta.checkout" />
                </Button>
              </Container>
            </Center>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <AspectRatio ratio={1080 / 720} w={"50%"}>
              <img src={collage} />
            </AspectRatio>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
