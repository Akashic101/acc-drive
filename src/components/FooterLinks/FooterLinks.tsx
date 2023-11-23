import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Space,
  Center,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandDiscord,
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
      { label: "Mirecourtstr. 8", id: "legalStuff" },
      { label: "53225 Bonn", id: "legalStuff" },
      { label: "Niklas Krause", id: "legalStuff" },
      { label: "Discord: MrPig100", id: "legalStuff" },
    ],
  },
  {
    title: "Impressum",
    links: [
      { label: "Impressum", id: "#" },
      { label: "Datenschutz (Website)", id: "#" },
      { label: "Datenschutz (Application)", id: "#" },
      { label: "Nutzungsbedigungen", id: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link to={link.id} offset={-50}>
        <Text
          key={index}
          className={classes.link}
          td={group.title === "Impressum" ? "underline" : undefined}
        >
          {link.label}
        </Text>
      </Link>
    ));

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
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <Logo />
            <Space h={"lg"} />
            <Text size="xs" c="dimmed" className={classes.description}>
              Supercharge your driving
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
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
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandDiscord
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Container>
      </footer>
    </Center>
  );
}
