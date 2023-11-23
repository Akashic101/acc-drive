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
  SimpleGrid,
} from "@mantine/core";
import classes from "./CTABanner.module.css";
import collage from "../../media/drive-collage.png";
import { Trans, useTranslation } from "react-i18next";

export function CTABanner() {
  const { t } = useTranslation("translations");
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
              <Trans i18nKey="cta.main.title" />
            </Text>{" "}
            <br></br>
          </Title>
          <Text size="xl" fw={500}>
            <Trans i18nKey="cta.main.costs" />
          </Text>
          <Text size="sm">
            <Trans i18nKey="cta.main.changeLinkedAccount_1" />
          </Text>
          <Text size="sm">
            <Trans i18nKey="cta.main.changeLinkedAccount_2" />
          </Text>
        </Container>
        <Center>
          <AspectRatio ratio={1080 / 720} w={"90%"}>
            <img src={collage} />
          </AspectRatio>
        </Center>
      </SimpleGrid>
    </Center>
  );
}
