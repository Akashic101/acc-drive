import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Flex,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBrandDiscord,
  IconCpu,
  IconRouteSquare,
} from "@tabler/icons-react";
import classes from "./HeroTitle.module.css";

export function HeroTitle() {
  return (
    <div className={classes.root}>
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
                THE RACER'S TOOLKIT
              </Text>{" "}
              <br></br>
              <Text component="span" inherit>
                FROM THE CREATORS OF ACC TV AND PYRACEENGINEER
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              When your mirrors are filled with the competition, and your team
              is depending on you to bring it home, the race should be your
              focus. ACC DRIVE provides every tool that you need to keep you
              immersed in the battle, and not off in the menus. It is a fully
              featured toolkit that gives you and your team the cutting edge
              needed to win races.
            </Text>
            <Group>
              <Button
                variant="gradient"
                gradient={{ from: "green", to: "#66ae3f" }}
                size="lg"
                className={classes.control}
                mt={40}
              >
                Features
              </Button>
              <Button variant="default" size="lg" mt={40}>
                Community
              </Button>
              <Button variant="default" size="lg" mt={40}>
                Download/Buy
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
