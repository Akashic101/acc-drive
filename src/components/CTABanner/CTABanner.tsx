import {
  Container,
  Title,
  Text,
  Button,
  Image,
  Center,
  SimpleGrid,
  Space,
} from "@mantine/core";
import classes from "./CTABanner.module.css";
import pitstop from "../../media/pitstop.gif";
import { Trans, useTranslation } from "react-i18next";
let pitstop2 = require("../../media/pitstop.gif");

export function CTABanner() {
  const { t } = useTranslation("translations");
  return (
    <Center>
      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={250}>
        <Center>
          <Container className={classes.wrapper}>
            <Title className={classes.title}>
              <Text
                inherit
                variant="gradient"
                fs={"italic"}
                gradient={{ from: "green", to: "#85d46c" }}
              >
                <Trans i18nKey="cta.main.title" />
              </Text>
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
            <Space h={"lg"} />
            <Button color={"#66ae3f"} fullWidth>
              <Trans i18nKey="cta.main.checkout" />
            </Button>
          </Container>
        </Center>
        <Center>
          <img className={classes.pitstopGif} src={pitstop} />
        </Center>
      </SimpleGrid>
    </Center>
  );
}
