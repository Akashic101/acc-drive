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
import { LanguagePicker } from "./LanguagePicker";
import Logo from "./Logo";

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
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Logo />
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
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
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Community
            </a>
          </Group>

          <Group visibleFrom="sm">
            <LanguagePicker />
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
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
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
