import {
  BackgroundImage,
  Button,
  CheckIcon,
  Container,
  Flex,
  Group,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Trans, useTranslation } from "react-i18next";
import classes from "./HeroContent.module.css";
import { notifications } from "@mantine/notifications";
import {
  IconBrandDiscord,
  IconCpu,
  IconRouteSquare,
} from "@tabler/icons-react";
import { Link } from "react-scroll";

export function HeroContent() {
  const { t } = useTranslation("translations");

  return (
    <Container size="md" className={classes.mainContainer}>
      <div className={classes.content}>
        <Title className={classes.title}>
          <Text
            fs="italic"
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "green", to: "#85d46c" }}
          >
            <Trans i18nKey="title.toolkit" />
          </Text>
          <br></br>
          <Text component="span" inherit>
            <Trans i18nKey="title.creator" />
          </Text>
        </Title>
        <Text className={classes.description} mt={30}>
          <Trans i18nKey="title.advertisement-text" />
        </Text>
        <Group>
          <Link to={"features"}>
            <Button
              variant="default"
              size="lg"
              mt={40}
              className={classes.control}
            >
              Features
            </Button>
          </Link>
          <Link to={"community"}>
            <Button
              variant="default"
              size="lg"
              mt={40}
              className={classes.control}
            >
              Community
            </Button>
          </Link>

          <Button
            variant="gradient"
            gradient={{ from: "green", to: "#66ae3f" }}
            size="lg"
            className={classes.control}
            mt={40}
            onClick={() =>
              notifications.show({
                title: "Feature not implemented",
                message: "You would be send to Paypal to buy ACC DRIVE",
                color: "teal",
                icon: <CheckIcon />,
              })
            }
          >
            <Trans i18nKey="title.download-buy" />
          </Button>
        </Group>
      </div>

      <Group>
        <Flex
          mih={50}
          maw={150}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          <ThemeIcon size="xl" variant="default">
            <IconBrandDiscord color={"#66ae3f"} />
          </ThemeIcon>
          <Trans i18nKey="title.community" />
        </Flex>
        <Flex
          mih={50}
          maw={150}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          <ThemeIcon size="xl" variant="default">
            <IconCpu color={"#66ae3f"} />
          </ThemeIcon>
          <Trans i18nKey="title.performance" />
        </Flex>
        <Flex
          mih={50}
          maw={150}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          <ThemeIcon size="xl" variant="default">
            <IconRouteSquare color={"#66ae3f"} />
          </ThemeIcon>
          <Trans i18nKey="title.updates" />
        </Flex>
      </Group>
    </Container>
  );
}