import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Center,
  Anchor,
  SimpleGrid,
  Divider,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandTwitch,
} from "@tabler/icons-react";
import Logo from "../Logo/Logo";
import classes from "./FooterLinks.module.css";
import { Link } from "react-scroll";

const data = [
  {
    title: "About",
    links: [
      { label: "Home", id: "home" },
      { label: "Features", id: "features" },
      { label: "Pricing", id: "pricing" },
      { label: "Community", id: "community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Mirecourtstr. 8", id: "#" },
      { label: "53225 Bonn", id: "#" },
      { label: "Niklas Krause", id: "#" },
      { label: "Discord: MrPig100", id: "#" },
    ],
  },
  {
    title: "Impressum",
    links: [
      { label: "Impressum", id: "https://accdrive.com/impressum" },
      { label: "Datenschutz (Website)", id: "https://accdrive.com/privacy" },
      {
        label: "Datenschutz (Application)",
        id: "https://accdrive.ritter-systems.com/release/privacy.html",
      },
      {
        label: "Nutzungsbedigungen",
        id: " https://accdrive.ritter-systems.com/release/tos.html",
      },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => {
      let linkElement;

      if (group.title === "About") {
        linkElement = (
          <Link key={index} to={link.id} className={classes.link}>
            <Text>{link.label}</Text>
          </Link>
        );
      } else if (group.title === "Impressum") {
        linkElement = (
          <Anchor
            key={index}
            href={link.id}
            className={`${classes.link}`}
            style={{
              textDecoration:
                group.title === "Impressum" ? "underline" : "none",
            }}
          >
            <Text>{link.label}</Text>
          </Anchor>
        );
      } else {
        linkElement = (
          <Text key={index} className={classes.nonLink}>
            {link.label}
          </Text>
        );
      }

      return linkElement;
    });

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <Center>
      <footer className={classes.footer}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing={50} mt={30}>
          <Container className={classes.inner}>
            <div className={classes.logo}>
              <Logo />
              <Text size="xs" c="dimmed" className={classes.description}>
                THE ULTIMATE ACC APP
              </Text>
            </div>
          </Container>
          <Container>
            <SimpleGrid
              style={{ right: "50%" }}
              cols={{ base: 1, sm: 3, lg: 3 }}
            >
              {groups}
            </SimpleGrid>
          </Container>
        </SimpleGrid>
        <Divider my={"sm"} />

        <Container className={classes.afterFooter}>
          <Text c="dimmed" size="sm">
            © 2023 ACC DRIVE. All rights reserved.
          </Text>

          <Group
            gap={0}
            className={classes.social}
            justify="flex-end"
            wrap="nowrap"
          >
            <Anchor href="https://dsc.gg/ACCDRIVE" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandDiscord
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            </Anchor>
            <Anchor href="https://www.youtube.com/channel/UCbvxTXYQOvln58MpErXZZIA" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            </Anchor>
            <Anchor href="https://www.twitch.tv/discostofftv" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitch
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            </Anchor>
          </Group>
        </Container>
      </footer>
    </Center>
  );
}
