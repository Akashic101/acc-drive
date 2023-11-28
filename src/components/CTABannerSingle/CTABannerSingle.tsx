import {
  Container,
  Title,
  Text,
  Button,
  Space,
  Center,
  Stack,
} from "@mantine/core";
import classes from "./CTABannerSingle.module.css";
import { Trans, useTranslation } from "react-i18next";

export function CTABannerSingle() {
  const { t } = useTranslation("translations");
  return (
    <Stack align="center">
      <Center>
        <Container>
          <Title className={classes.title}>
            <Text
              fs="italic"
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
          <Space h={"lg"} />
          <Button color={"#66ae3f"} fullWidth>
            <Trans i18nKey="cta.main.checkout" />
          </Button>
        </Container>
      </Center>
    </Stack>
  );
}
