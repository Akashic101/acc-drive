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
            </Text>
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
          <Space h={"lg"} />
          <Button color={"#ffc438"} fullWidth>
            <Trans i18nKey="cta.main.checkout" />
          </Button>
        </Container>
        <Center>
          <Image src={pitstop} h={"90%"} />
        </Center>
      </SimpleGrid>
    </Center>
  );
}
