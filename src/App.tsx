import "./App.css";
import "@mantine/core/styles.css";
import { HeroTitle } from "./components/HeroTitle/HeroTitle";
import { CTABanner } from "./components/CTABanner/CTABanner";
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
  Space,
  UnstyledButton,
  rem,
  Text,
  ThemeIcon,
  Anchor,
  SimpleGrid,
  Select,
  SegmentedControl,
  SegmentedControlItem,
  Container,
} from "@mantine/core";
import { FeatureCardList } from "./components/FeatureCardList/FeatureCardList";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { CTAVideoBanner } from "./components/CTAVideoBanner/CTAVideoBanner";
import { CommunityReviews } from "./components/CommunityReviews/CommunityReviews";
import { CTABannerSingle } from "./components/CTABannerSingle/CTABannerSingle";
import { FooterLinks } from "./components/FooterLinks/FooterLinks";
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
import { changeLanguage } from "i18next";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { LanguagePickerMobile } from "./components/LanguagePickerMobile/LanguagePickerMobile";

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
  const [selectedLanguage, setSelectedLanguage] = useState("gb");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    changeLanguage(value);
    closeDrawer();
  };

  const links = featureList.map((feature) => (
    <Link to="features" onClick={closeDrawer}>
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
              <Link to={"home"}>
                <Button color={"#66ae3f"}>Login</Button>
              </Link>
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
                <Button fullWidth color={"#66ae3f"}>
                  Log in
                </Button>
              </Link>
            </Group>
            <LanguagePickerMobile />
          </ScrollArea>
        </Drawer>

        <AppShell.Main>
          <I18nextProvider i18n={i18n}>
            <HeroTitle />
            <Space h="xl" id="pricing" />
            <CTABanner />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" id="features" />
            <Space h="xl" />
            <FeatureCardList />
            <Space h="xl" />
            <CTAVideoBanner />
            <Space h="xl" />
            <Space h="xl" id="community" />
            <Space h="xl" />
            <CommunityReviews />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <CTABannerSingle />
            <Space h="xl" />
            <Space h="xl" />
          </I18nextProvider>
          <FooterLinks />
        </AppShell.Main>
      </AppShell>
    </div>
  );
}

export default App;
