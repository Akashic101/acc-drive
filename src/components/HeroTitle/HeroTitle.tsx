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
  IconBrandDiscord,
  IconCpu,
  IconRouteSquare,
} from "@tabler/icons-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import classes from "./HeroTitle.module.css";

export function HeroTitle() {
  const { t } = useTranslation("translations");
  return (
    <div className={classes.root} id="home">
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
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
                <Button variant="default" size="lg" mt={40}>
                  Features
                </Button>
              </Link>
              <Link to={"community"}>
                <Button variant="default" size="lg" mt={40}>
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
    </div>
  );
}
