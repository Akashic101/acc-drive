import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconClockStar,
  IconFlagExclamation,
  IconGasStation,
  IconReportAnalytics,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { LanguagePicker } from "../LanguagePicker/LanguagePicker";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";

const featureList = [
  {
    icon: IconClockStar,
    title: "Remote Pitstop",
    description: "Improve your pitstops with the click of a button",
  },
  {
    icon: IconUsers,
    title: "Compare pace",
    description: "See how other drivers are performing",
  },
  {
    icon: IconFlagExclamation,
    title: "Improved flag-system",
    description: "Know instantly where an incident happened",
  },
  {
    icon: IconReportAnalytics,
    title: "Detailed data",
    description: "See everything about your race, car and pace",
  },
  {
    icon: IconTool,
    title: "Pitstop-prediction",
    description: "Instant information about where you will exit the pitlane",
  },
  {
    icon: IconGasStation,
    title: "Fuel / PSI Calculator",
    description: "Race with the perfect tires and amount of fuel",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const links = featureList.map((feature) => (
    <UnstyledButton className={classes.subLink} key={feature.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <feature.icon
            style={{ width: rem(22), height: rem(22) }}
            color={"#66ae3f"}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {feature.title}
          </Text>
          <Text size="xs" c="dimmed">
            {feature.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={10}>
      <header
        className={classes.header}
        style={{
          backgroundColor: "#1a1b1e",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          zIndex: 1000,
        }}
      >
        <Group justify="space-between" h="100%">
          <Link to={"home"}>
            <Logo />
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="home">
              <a href="home" className={classes.link}>
                Home
              </a>
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#features" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={"#66ae3f"}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#features" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#community" className={classes.link}>
              Community
            </a>
          </Group>

          <LanguagePicker />
          <Group visibleFrom="sm">
            <Button color={"#66ae3f"}>Login</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Logo />
        <ScrollArea h={`calc(100vh`} mx="-md">
          <Divider my="sm" />
          <Link to="home">Home</Link>
          <Container className={classes.link} onClick={toggleLinks}>
            <Text>Features</Text>
            <IconChevronDown
              color={"#66ae3f"}
              style={{ width: rem(16), height: rem(16) }}
            />
          </Container>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link to="community">Community</Link>
          <Divider my="sm" />
          <Button color={"#66ae3f"}>Login</Button>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
