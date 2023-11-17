import {
  Container,
  Text,
  Button,
  Group,
  ThemeIcon,
  Flex,
  Space,
} from "@mantine/core";
import {
  IconBrandDiscord,
  IconCpu,
  IconRouteSquare,
} from "@tabler/icons-react";
import classes from "./HeroTitle.module.css";

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <Text
            fs="italic"
            component="span"
            variant="gradient"
            gradient={{ from: "green", to: "#66ae3f" }}
            inherit
          >
            THE RACER'S TOOLKIT
          </Text>

          <Text fs="italic" inherit>
            FROM THE CREATORS OF ACC TV AND PYACCENGINEER
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          When your mirrors are filled with the competition, and your team is
          depending on you to bring it home, the race should be your focus. ACC
          DRIVE provides every tool that you need to keep you immersed in the
          battle, and not off in the menus. It is a fully featured toolkit that
          gives you and your team the cutting edge needed to win races.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            variant="gradient"
            gradient={{ from: "green", to: "#66ae3f" }}
          >
            Features
          </Button>
          <Button variant="default" size="xl">
            Community
          </Button>
          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
          >
            Download/Buy
          </Button>
        </Group>

        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
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
            <Text>Join the community and talk with other drivers</Text>
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
            <Text>Small, lightweight and no impact on FPS</Text>
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
            <Text>Join the community and talk with other drivers</Text>
          </Flex>
        </Group>
      </Container>
    </div>
  );
}
