import "./App.css";
import "@mantine/core/styles.css";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  UnstyledButton,
  rem,
  Text,
  ThemeIcon,
  Anchor,
  SimpleGrid,
} from "@mantine/core";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Logo from "./components/Logo/Logo";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-scroll";
import { LanguagePicker } from "./components/LanguagePicker/LanguagePicker";
import {
  IconChevronDown,
  IconClockStar,
  IconFlagExclamation,
  IconGasStation,
  IconReportAnalytics,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./App.module.css";
import { LanguagePickerMobile } from "./components/LanguagePickerMobile/LanguagePickerMobile";
import BodyContent from "./components/BodyContent/BodyContent";
import LoginButton from "./components/LoginButton/LoginButton";

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
function App() {
  const [opened, { toggle }] = useDisclosure();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const links = featureList.map((feature) => (
    <Link to="features" onClick={closeDrawer} key={feature.title}>
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
    </Link>
  ));

  return (
    <div className="App">
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Group h="100%" px="md" justify="space-between">
            <Link to={"home"}>
              <Logo />
            </Link>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
            <Group ml="xl" gap={10} visibleFrom="sm">
              <Link to="home">
                <UnstyledButton>Home</UnstyledButton>
              </Link>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a>
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
              <Link to="community">
                <UnstyledButton>Community</UnstyledButton>
              </Link>
            </Group>
            <Group visibleFrom="sm">
              <LanguagePicker />
              <LoginButton />
            </Group>
          </Group>
        </AppShell.Header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title={<Logo />}
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <Link to={"home"} onClick={closeDrawer}>
              <Text className={classes.link}>Home</Text>
            </Link>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={"#66ae3f"}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <Link to={"community"} onClick={closeDrawer}>
              <Text className={classes.link}>Community</Text>
            </Link>
            <Divider my="sm" />
            <Group justify="center" grow pb="xl" px="md">
              <Link to={"home"}>
                <LoginButton />
              </Link>
            </Group>
            <LanguagePickerMobile />
          </ScrollArea>
        </Drawer>

        <AppShell.Main>
          <I18nextProvider i18n={i18n}>
            <BodyContent />
          </I18nextProvider>
        </AppShell.Main>
      </AppShell>
    </div>
  );
}

export default App;
